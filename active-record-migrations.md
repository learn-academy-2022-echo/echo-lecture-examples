### Active Record Migrations 8/31/22 Echo

- Migrations: a new version of the database that allows you to track how you have changed the schema
- *** UPDATED NOTES *** In other words, when a migration is complete, we have a new version of the database. Migrations have the added benefit of tracking changes to the schema over time.
- rails generate commands allows Rails to setup corresponding file structure

### Create Rails app
- $ rails new echo_band -d postgresql -T
- $ cd echo_band
- $ ls
- $ rails s
- $ code .
- $ rails db:create
_____________________________
Rails will create a development and test environments for this empty database.
```bash
Created database 'echo_band_development'
Created database 'echo_band_test'
```
_____________________
- $ rails g model Member name:string role:string
_____________________
Rails has created files within the db and models folder.
_________________
```bash
      invoke  active_record
      create    db/migrate/20220831213407_create_members.rb
      create    app/models/member.rb
```
______________________________________
To save the changes
- $ rails db:migrate

Go to rails console to make data entries
- $ rails c

CRUD ACTIONS
Create
> Member.create name: "Charlean", role: "drummer"

> Member.create name: "Daniel", role: "guitar"

> Member.create name: "Cliff", role: "recorder"

> Member.create name: "Sam", role: "cowbell player"

> Member.create name: "Hieu", role: "cowbell player"

> Member.create name: "Dawit", role: "cowbell player"

Read
> Member.all

> Member.where role: "recorder"

Update
- Reassigning the value
> new_role = Member.find 3

> new_role.role = "harmonica"

> new_role.save

- Update method
> new_name = Member.find 5

> new_name.update name: "🥧"

> new_name = Member.find 1

> new_name.update(name: "Cha Cha", role:"triangle")

Delete
> charlean = Member.find 1

> charlean.destroy

### Create a migration
- $ rails g migration add_column_gigs_to_member
- Place the change definition within the change method
```ruby
# add_column :table_name, :column_name, :datatype
add_column :members, :gigs, :integer 
```
- $ rails db:migrate

- *** UPDATED NOTES ***
### Update the nil values using the rails console
- Current Entries with the new column of gigs   
[#<Member:0x0000000135c430e8                                    
  id: 2,                                                        
  name: "Daniel",                                               
  role: "guitar",                                               
  created_at: Wed, 31 Aug 2022 21:46:42.703053000 UTC +00:00,   
  updated_at: Wed, 31 Aug 2022 21:46:42.703053000 UTC +00:00,   
  gigs: nil>,                                                   
 #<Member:0x00000001110921c8                                    
  id: 4,                                                        
  name: "Sam",                                                  
  role: "cowbell player",                                       
  created_at: Wed, 31 Aug 2022 21:47:53.719361000 UTC +00:00,   
  updated_at: Wed, 31 Aug 2022 21:47:53.719361000 UTC +00:00,   
  gigs: nil>,    
 #<Member:0x0000000111092100  
  id: 6,  
  name: "Dawit",  
  role: "cowbell player",  
  created_at: Wed, 31 Aug 2022 21:48:16.462201000 UTC +00:00,  
  updated_at: Wed, 31 Aug 2022 21:48:16.462201000 UTC +00:00,  
  gigs: nil>,  
 #<Member:0x0000000111092038  
  id: 3,  
  name: "Cliff",  
  role: "harmonica",  
  created_at: Wed, 31 Aug 2022 21:47:42.017102000 UTC +00:00,  
  updated_at: Wed, 31 Aug 2022 21:57:54.437166000 UTC +00:00,  
  gigs: nil>,  
 #<Member:0x0000000111091f70  
  id: 5,  
  name: "🥧",  
  role: "cowbell player",  
  created_at: Wed, 31 Aug 2022 21:48:04.636346000 UTC +00:00,  
  updated_at: Wed, 31 Aug 2022 22:03:13.535861000 UTC +00:00,  
  gigs: nil>] 

- using the update_all method
> gigs_update = Member.where(gigs:nil)

> gigs_update.update_all(gigs: 2)

> Member.all

Output:                                                            
[#<Member:0x00000001110903c8            
  id: 2,                                                        
  name: "Daniel",                                               
  role: "guitar",                                               
  created_at: Wed, 31 Aug 2022 21:46:42.703053000 UTC +00:00,   
  updated_at: Wed, 31 Aug 2022 21:46:42.703053000 UTC +00:00,   
  gigs: 2>,                                                     
 #<Member:0x0000000111090260                                    
  id: 4,                                                        
  name: "Sam",                                                  
  role: "cowbell player",                                       
  created_at: Wed, 31 Aug 2022 21:47:53.719361000 UTC +00:00,   
  updated_at: Wed, 31 Aug 2022 21:47:53.719361000 UTC +00:00,   
  gigs: 2>,  
 #<Member:0x0000000111090058  
  id: 6,  
  name: "Dawit",  
  role: "cowbell player",  
  created_at: Wed, 31 Aug 2022 21:48:16.462201000 UTC +00:00,  
  updated_at: Wed, 31 Aug 2022 21:48:16.462201000 UTC +00:00,  
  gigs: 2>,  
 #<Member:0x000000011108bf58  
  id: 3,  
  name: "Cliff",  
  role: "harmonica",  
  created_at: Wed, 31 Aug 2022 21:47:42.017102000 UTC +00:00,  
  updated_at: Wed, 31 Aug 2022 21:57:54.437166000 UTC +00:00,  
  gigs: 2>,  
 #<Member:0x000000011108b9e0  
  id: 5,  
  name: "🥧",  
  role: "cowbell player",  
  created_at: Wed, 31 Aug 2022 21:48:04.636346000 UTC +00:00,  
  updated_at: Wed, 31 Aug 2022 22:03:13.535861000 UTC +00:00,  
  gigs: 2>] 