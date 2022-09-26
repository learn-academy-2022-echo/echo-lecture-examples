# RESTful Routes 9/7/22

Convention: A standard for operating procedures, a set of rules or guidelines

REST: Representational State Transfer
- Transferring data from databases using Hyper Text Transfer Protocol 
- A pattern for structuring the routes between the server and the client
  - the client could be a user on a browser
  - the client could be another program , which makes our app an API 
- To standardize the approach to Creating, Reading, Updating, and Deleting data by using http requests


# CRUD Actions
Create - Create an instance of a model/table and store it in the database as an object / row
Read - Retrieving data from the DB and displaying it
Update - Identifying an instance/object/row in the database and updating its values
Delete - Removing an instance/object/row from the database

# HTTP Verbs
GET - there is some data I want, send it over to me
POST - I have data you want, accept this data and save it
PUT - I have an update to an entire instance in the DB, please overwrite it
PATCH - I have an update to a part of an instance in the DB, please overwrite it
DELETE - I would like this instance removed from your database

# RESTful Controller Actions
Index - A list of all available data in the database
Show - a specific item from t he database
New - is an HTML form for creating an item to insert into the database
Create - adds the value of that new item into the database
Edit - is an HTML form for updating an item in the database
Update - overwrite the value of an existing instance using the edit forms values
Destroy - remove an item in the database

# Restful routes 

```ruby
http_verb 'table_name_plural' => 'controller_name#restful_method'

# INDEX restful route for BlogPost
get 'blog_posts' => 'blog_post#index'
# DESTROY restful route for BlogPost
delete 'blog_posts/:id' => 'blog_post#destroy'
```