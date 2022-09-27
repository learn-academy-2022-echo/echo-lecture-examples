# Set Up Commands 
  $ rails new react-in-rails-with-devise -d postgresql -T
  $ cd react-in-rails-with-devise
  $ rails db:create
  $ bundle add webpacker
  $ bundle add react-rails
  $ rails webpacker:install
  $ rails webpacker:install:react
  $ yarn add @babel/preset-react
  $ yarn add @rails/activestorage
  $ yarn add @rails/ujs
  $ rails generate react:install
  $ rails generate react:component App
  $ rails generate controller Home index
```ruby
<%= react_component 'App' %>
```

```ruby
  // Find this line:
<%= javascript_importmap_tags %>

// And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

  $ bundle add devise
  $ rails generate devise:install
  $ rails generate devise User
  $ rails db:migrate

- You can see devise by navigating to 3000/users/sign_up
- After signing up you can see the user in the rails console. 
```ruby
> User.all
```

# Passing the information over to react
- check out the `index.html.erb` for the second argument of the method react_component
- React now has access to this info via the props argument in the component
- You can do whatever you wan with this info 
  - in this project we pass it over to the header to handle routing
