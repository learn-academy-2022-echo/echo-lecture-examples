# React in Rails Set Up Commands
  $ rails new hello-world -d postgresql -T
  $ cd hello-world
  $ rails db:create
  $ rails s
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
    -       create    app/views/home
    -       create    app/views/home/index.html.erb
  $ rails s
  $ bundle add bootstrap
  $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
  $ yarn add reactstrap
  $ yarn add react-router-dom
