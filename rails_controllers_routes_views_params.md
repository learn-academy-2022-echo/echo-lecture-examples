## Rails Controllers Views Params 9/6/22 Echo

- Controllers: director of the application, give the instructions based on the request and inform the application how to respond

- Views: graphical representation of the html content that is sent back for the user to see

### Create Rails App
- $ rails new routes_controllers_views_params -d postgresql -T
- $ cd routes_controllers_views_params
- $ rails s
- $ rails db:create
- $ code .

### Building Controllers, Routes, and Views
- Generate a controller (controller's name is PascalCase)
  - apps/controller
  - Add controller method that will render html/view
  - Declare an @instance_variable that we can call on in the views
- Add the route that will call the controller
  - Routes live in config/routes.rb
  - http_verb '/name_of_route' => 'name_of_controller#name_of_method'
- Create a view that have the html content to display on the browser
  - Made a file app/views/controller_name/method_name.html.erb
  - Added some html and erb

### Controller
- app/controllers
- PascalCase naming convention
- $ rails g controller Home

### Routes
- config/routes.rb
- combination of a HTTP verb, url, controller name, and method name
- http_verb '/url'=> 'controller_name#method_name'
- get '/aloha' => 'home#aloha'
- http verb: get ---> action: read

### Views
- app/views
- create a view file with the extension `.html.erb`
- ERB: embedded ruby
- ruby tags: 
  - <% for ruby code that should not be rendered in the browser %>
  - <%= for ruby code that will be rendered in the browser %>

```ruby
  <% name = 'Echo 2022' %>
  <h1> Aloha, <%= name %>! I am the aloha action on the home controller.</h1>
```

- Use rails parameters to pass the value outside of the view template
  - This parameter will be passed into the controller as an instance variable.
  - this assignment gives a default value of 'Echo 2022'
    - @name = 'Echo 2022'
  - this assignment allows a value to appear dynamically from the params hash
    - @name = params['name']

```ruby
  # to see the params hash
  # place in the controller
  render plain: "#{params}"
  # Output: {"controller"=>"home", "action"=>"aloha", "name"=>"Cathrine"}
```

- Two ways to add this param
  - remove the name assignment on the view
  1. query placed at the end of the url
    - ?name=Brook
    - to take in a name from the query, params have to be allowed in the action controller
  2. Update the routes to capture this data needed for the name params
    - get '/:name' => 'home#aloha'
    - Add a name to the end of the url
      - http://localhost:3000/aloha/Charlean


### Add a Luau controller that will determine roles based on a birth year param
```ruby
# Generate controller
# Add action method
class LuauController < ApplicationController
  def team
    if params[:birth_year].to_i.even? && params[:birth_year].to_i > 2000
      @role = 'Hula'
    elsif params[:birth_year].to_i > 2000
      @role = 'Pineapple Drinks'
    elsif params[:birth_year].to_i.even? && params[:birth_year].to_i < 2000
      @role = 'Leis'
    else
      @role = 'Fire Twirling'
    end
    render 'luau/team'
  end
end

# Route
get '/luau/:birth_year' => 'luau#team'

# Views
# app/views/luau/team.html.erb
<h2> So excited for the Echo22 Luau! Mahalo for volunteering with the <%= @role %> department. </h2>
```