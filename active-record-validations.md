# Active Record Validations 9/2/22

 # Whats the point of...?
  - TDD Test Driven Development
    - Make sure your code works
    - Write less breakable code
    - Validate inputs / outputs
    - It will not break a larger body of work
    - If changes in the future are made we can know if it'll break the older code
    - quick feedback
    - Help you correct your code /fix bugs
    - TDD does take time but increases quality 
      - Quality of TDD code is so high it's worth it
      - Fixes long term issues
  - Validation
    - Ensure that ONLY the data we want gets into our database
  - Specs
    - Specifications 
    - That tells other developers what kind of data and information we are looking to work with

  # What is a validation?
    - A validation is a rails method that can be set up in  a number of different ways depending on the arguments passed to it
    - The job of a validation to reject improper data being sent by a user or malicious user 
      - is to send back the appropriate error & status code 
    
```ruby
rails g model Player name:string position:string number:integer td_tackle:integer
      invoke  active_record
      create    db/migrate/20220902163807_create_players.rb
      create    app/models/player.rb
      invoke    rspec
      create      spec/models/player_spec.rb
```

spec/models/player_spec.rb
```ruby
require 'rails_helper'

RSpec.describe Player, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
```
- This file is going to be where we test our validations for our Player model. 
- We have to write tests as if we were a hacker or confused user trying to send the wrong info into our database
  - our code then needs to reject that data

```ruby
describe 'Player Model' do
  it 'throws an error if name is empty' do
    player = Player.create name: nil, position: 'Offensive QB', number:8, td_tackle: 105

    p player.errors[:name]

    expect(player.errors[:name]).to_not be_empty
  end
 end
```
Failures:

  1) Player Player Model throws an error if name is empty
     Failure/Error: expect(player.errors[:name]).to_not be_empty
       expected `[].empty?` to be falsey, got true
     # ./spec/models/player_spec.rb:10:in `block (3 levels) in <top (required)>'

Finished in 0.1167 seconds (files took 2.02 seconds to load)
1 example, 1 failure

# TDD 
- Red 
  - running the test to make sure it fails BEFORE we write the code that makes it pass
- Green 
- Refactor

## Model Validations
```ruby
  class Player < ApplicationRecord
    validates :name, presence: true
  end
```
 $ rspec spec/models/player_spec.rb 
Player
  Player Model
["can't be blank"]
    throws an error if name is empty

Finished in 0.06558 seconds (files took 2.05 seconds to load)
1 example, 0 failures