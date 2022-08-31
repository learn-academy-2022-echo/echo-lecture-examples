# Rails Intro 8/31/22


# Ruby On Rails
- Ruby Language Framework
  - Built by DHH 
  - "Look at all the things I am not doing" - DHH
- Full Stack application 
  - Incorporates both frontend and backend technologies 
  - "From Hello World to IPO"
  - "Convention over configuration" 
    - Rails is SUPER PICKY about naming conventions
- MVC Architecture
  - Model 
    - the guide to making memory storage. Handles how data will be shaped, data validations, how the data relates to other data. 
  - View
    - What the user can see, interact with, how the user inputs data / updates data. 
  - Controller
    - Brain of our app, it's in charge of making decisions, managing interactions between the user and the database, it's URL friendly.
  
  - When a user can see a page, input data, have that data stored, view that stored data, update the data or delete it --> CRUD --> Full Stack Application

  # Setting up a Rails Application

  $ rails new 
  - rails needs a nam for our app -> rails_intro
  - rails database system drop flag -> -d
  - rails database system selector -> postgresql
  - rails testing envirment drop flag -> -T

  $ rails new rails_intro -d postgresql -T
    -> created out rails app 
  - Rails project names NEED to be lowercase and singular: ideally snake_case

  ## Run a rails project
  $ rails db:create
  -  Created database 'rails_intro_development'
  -  Created database 'rails_intro_test'
  $ rails server || rails s

  Completed 200 OK in 41ms (Views: 15.8ms | ActiveRecord: 0.0ms | Allocations: 6249)