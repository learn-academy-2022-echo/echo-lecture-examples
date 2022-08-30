# Intro to Databases and Postgresql 8/30/22

# Classes
- blueprint for as many objects as we need
```ruby
  class LearnStudent
    def initialize name, age, dob, hobbies, pets=[],
    @age = age
    @name = name
    @dob = dob
    @hobbies = hobbies
    @pets = pets
    end
  end

  rashad = LearnStudent.new('Rashad', 39, '06-22-1983', ['motorcycles'], ['cat'])
  p rashad 
  ```
  # #<LearnStudent:0x00007fea868f5318
  @age=39,
  @dob="06-22-1983",
  @hobbies=["motorcycles"],
  @name="Rashad",
  @pets=["cat"]> 
 
# Models
In real life what is a model? 
  - scaled representation
    - gundam model
    - legos
  - Model Home 
    - Example home to walk through
Models describe the structure of the ting it represents
This structure almost exactly correlates to the data and behavior of classes. 

# Instances 
 - a brand new version or copy of something that was blueprinted earlier
 - is an entry into the database
 - Must follow the structure of the Model / Class it is based on

## Primary key
  - Always unique 
    - SSN 
    - Student number
    - Liscense Number
    - chohort + number
    - integers
  - In modern SQL primary keys are integers
  - Primary keys are given to entires of data WITHOUT the developers input
  - in Rails primary keys are called ID

# SQL - Structured Query Language
  # PostgreSQl - psql 
    - Strongly OOP - Object Oriented Programming 
      - Reddit
      - Instagram
      - Meta
      - Spotify
      - ISS - The International Space Station 
    
  ## Query 
  - a request for data - Read
  - request for an action related to database - Update, Create, Delete

  # Select / From 
    - The most basic query
    - Select what data sets / Column Headers we are wanting to look at
    - from tells us which table model or class we want to see that data from
  
  ```sql 
  SELECT * FROM Country
  ```
   gave us the whole table
  ```sql
  SELECT name FROM Country
  ``` 
  gave us all the names and the primary keys only! 

  ```sql
  SELECT name, lifeexpectancy FROM Country
  SELECT name, localname FROM Country
  ```
# Limit
  - limits the number of returned instances from the database
  - only accepts numbers as arguments

  ```sql
  SELECT name, lifeexpectancy 
  FROM Country
  LIMIT 5
  ```
  - Organized by primary key

# Where 
  - allows us to filter data
  - Does NOT show us data that doesn't match the filter
  - Only shows us data that does match the filter

  ```sql 
  SELECT name, population 
  FROM Country
  WHERE population > 100000000
  ```
  - gave us 10 countries and their populations

  - Strings must be single quotes only
```sql
  SELECT name, population, governmentform
    FROM Country
    WHERE governmentform = 'Monarchy'
```
## Like
- Like looks for pieces of Data or Data Sets that activate a boolean value
- Like has access to the wildcard operator
  - %
- The Wildcard operator acts as if it was any group of strings possible after or before it's position in the string depending on where it is placed

## AND 
```sql
  SELECT name, region
  FROM Country
  WHERE region
  LIKE '%merica'
  AND continent
  LIKE 'South%'
```

# ORDER BY
- defaults to ascending order
- Reorganizes the data that is being returned from the query according to whatever rule it is given

```sql
SELECT name, surfacearea
FROM Country
ORDER BY surfacearea
```
## DESC
  is an additional rule that can be passed to orderby


# AS
 - Creates an alias / temporary column header that can be used for other queries
 

