# Active Record Associations 9/1/22

- foreign-key
- relational databases
- database associations 

 $ rails generate model User user_name:string email:string 
      invoke  active_record
      create    db/migrate/20220901163137_create_users.rb
      create    app/models/user.rb
 $ rails db:migrate 
== 20220901163137 CreateUsers: migrating ======================================
-- create_table(:users)
   -> 0.0104s
== 20220901163137 CreateUsers: migrated (0.0105s) =============================


User.create ...
[#<User:0x00007fab9c414ca0    
  id:1,                                    user_name:"kellllly",                    email: "kellllly@gmail.com",                              
  created_at: Thu, 01 Sep 2022 16:35:54.107308000 UTC +00:00,
  updated_at: Thu, 01 Sep 2022 16:35:54.107308000 UTC +00:00>,
 #<User:0x00007fab9d091230 
  id:2,                                    user_name:"wizard_kicker",               email: "ikickwizards@gmail.com",                          
  created_at: Thu, 01 Sep 2022 16:36:30.104007000 UTC +00:00,
  updated_at: Thu, 01 Sep 2022 16:36:30.104007000 UTC +00:00>,
 #<User:0x00007fab9d091168                 
  id: 3,
  user_name: "reddit_user_12764",
  email: "mom_doesnt_know@hotmail.com",
  created_at: Thu, 01 Sep 2022 16:37:17.722991000 UTC +00:00,
  updated_at: Thu, 01 Sep 2022 16:37:17.722991000 UTC +00:00>] 

# Creating another model called BlogPost that has a relationship to the model User
  - belongs_to < has_many
  - the model with on the belongs_to side will need a foreign key to track which user each blog_post is from
```
  $ rails g model BlogPost title:string post:text img_url:string user_id:integer
                                                                   ^ user foreign_key
```


```ruby
class BlogPost < ApplicationRecord
  belongs_to :user
end
```
- belongs_to relationship is declared on the model that holds the foreign_key 

```ruby
class User < ApplicationRecord
  has_many :blog_posts
end
``` 
- in this case blog posts belongs to individual users, and users can have many blog posts


## Creating Blog Posts
- While we can forcibly pass a foreign_key to a blog-post creation, it's better to let rails handle the association between the tables on it's own. 

We can do this by: 
1. Establishing a variable of the user that is making a post
  > kelly = User.where(user_name:'kellllllly')[0]
    (.where returns an array)
2. Calling on the variable and appending the associated table pluralized because the kind of relationship 
  > kelly.blog_posts
3. Pass the create method with all of the needed arguments WITHOUT the foreign_key
  > kelly.blog_posts.create ...

```ruby
kelly.blog_posts.create title:'more on fairy tail', post:'lorem ipsum',
 img_url:'https://pm1.narvii.com/6835/6c4ea1830f4934ee8a0e4322ff3ebfd119ea7d14v2_hq.
jpg'

#<BlogPost:0x00007fa15d599088   
 id: 2,       
 title: "more on fairy tail",     
 post: "lorem ipsum",   
 img_url: "https://pm1.narvii.com/6835/6c4ea1830f4934ee8a0e4322ff3ebfd119ea7d14v2_hq.jpg",
 user_id: 1,
 created_at: Thu, 01 Sep 2022 16:57:54.149626000 UTC +00:00,
 updated_at: Thu, 01 Sep 2022 16:57:54.149626000 UTC +00:00> 
```