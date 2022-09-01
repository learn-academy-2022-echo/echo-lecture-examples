# Intro to Active Record

1. A rails generate command
2. Active Record data types

  $ rails generate model ... 
    - Arguments: 
      - Model Name -> in PascalCase -> Singular 
      - column_names -> snake_case -> Singular
      - AR Datatype -> match exactly to approved datatypes
      - columns are separated by spaces NOT commas 
  $ rails generate model Schedule event_name:string date:date time:string location:string
          invoke  active_record
          create    db/migrate/20220831174651_create_schedules.rb
          create    app/models/schedule.rb
  $ rails db:migrate
    == 20220831174651 CreateSchedules: migrating ==================================
    -- create_table(:schedules)
      -> 0.0109s
    == 20220831174651 CreateSchedules: migrated (0.0110s) =========================

# Getting info into the Database 
## Rails console 
 $ rails console || rails c

# Active Record methods
  - ruby like syntax that interacts with our SQL database

# Create
```ruby
  > Schedule.all
  Schedule Load (4.9ms)  SELECT "schedules".* FROM "schedules"
  => []


> Schedule.create event_name:'Morgan Wallen', date:Date.today + 4, ti
me: '8pm ct', location: 'St. Luis' 

#<Schedule:0x00007fde18ce3648                   
id: 3,             
event_name: "Morgan Wallen",                                              
date: Sun, 04 Sep 2022,
time: "8pm ct",     
location: "St. Luis",
created_at: Wed, 31 Aug 2022 18:08:48.701140000 UTC +00:00,                    
updated_at: Wed, 31 Aug 2022 18:08:48.701140000 UTC +00:00> 
```

# READ 
 $ Schedule.first
  -> returns the first item in the database
  -> single hash
 $ Schedule.last
  -> returns the last item in the database
 $ Schedule.find id
  -> returns the object at the id
 $ Schedule.all
  -> returns an array / list of all the objects
 $ Schedule.where column_name:value
  -> returns an array that matches the condition of the where

# Update
  - to update an item you must first create a variable for it
  - to create a ruby variable name the variable and then use the assignment operator to identify what instance in the database you are referring too. 
```ruby
> concert = Schedule.find 3
> concert
 => 
#<Schedule:0x00007fd8db395c90                                             
 id: 3,                                                                   
 event_name: "Morgan Wallen",                                             
 date: Sun, 04 Sep 2022,                                                  
 time: "8pm ct",                                                          
 location: "St. Luis",                                                    
 created_at: Wed, 31 Aug 2022 18:08:48.701140000 UTC +00:00,              
 updated_at: Wed, 31 Aug 2022 18:08:48.701140000 UTC +00:00>              
                
> concert.update location:'Nashville'
  TRANSACTION (0.2ms)  BEGIN
  Schedule Update (5.9ms)  UPDATE "schedules" SET "location" = $1, "updated_at" = $2 WHERE "schedules"."id" = $3  [["location", "Nashville"], ["updated_at", "2022-08-31 18:21:33.507362"], ["id", 3]]                         
  TRANSACTION (4.7ms)  COMMIT                                  
 => true                                                       
 > concert
 => 
#<Schedule:0x00007fd8db395c90                                  
 id: 3,                                                        
 event_name: "Morgan Wallen",                                  
 date: Sun, 04 Sep 2022,                                       
 time: "8pm ct",                                               
 location: "Nashville",                                        
 created_at: Wed, 31 Aug 2022 18:08:48.701140000 UTC +00:00,   
 updated_at: Wed, 31 Aug 2022 18:21:33.507362000 UTC +00:00> 
```