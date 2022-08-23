# Ruby Conditions and Methods - 8/23/22 Echo

# ruby methods - functions that belong to objects, hold code snippets of logic

# use keywords def and end
# def - define the method
# custom_name in snake case
# every def has a corresponding end
# method call
# indentation is very important
# implicit return - will output the last line, the return keyword is not necessary

# def echo_message
  # "Aloha, Echo, what's your slogan?"
# end

# p echo_message

# run the code with ruby <file_name>
# Output: "Aloha, Echo, what's your slogan?"

# def my_message
#   response = 'Delta21 became the Full Stackers'
#   p response
# end

# my_message
# # Output: 'Delta21 became the Full Stackers'

# p response
# Output: error message ---> NameError because the variable is locally scope to the code block

# Methods with Arguments
# string interpolation "#{variable_name}"
# def message name
#   "Aloha, #{name}!"
# end

# p message 'Echo Cohort'
# Output: "Aloha, Echo Cohort!"

# def flower_up(name1, name2)
#   "#{name1} 🌺 #{name2}"
# end

# p flower_up("Austin", "Nicole")
# Output: "Austin 🌺 Nicole"

# Conditionals - evaluations will not be in parenthesis nor the code block in curly braces, pay attention to indentation
  # if/else - binary conditionals, if begins the conditional, every if has an end, only one if per conditional
  # else - catchall, only one else per conditional

# def wwe_smack wrestler
#   if wrestler == 'The Rock'
#     p 'Can you smell what the Rock is cooking?'
#   end
# end

# wwe_smack 'The Rock'
# Output: "Can you smell what the Rock is cooking?"

# wwe_smack 'Stone Cold'
# Output: nothing is occurs because we do not have a true condition to cover this argument

# def wwe_smack wrestler
#   if wrestler == 'The Rock'
#     p 'Can you smell what the Rock is cooking?'
#   else 
#     p 'Sorry that person has been censored'
#   end
# end

# wwe_smack 'Stone Cold'
# Output: "Sorry that person has been censored"

# elsif - keyword that allows additional evaluations, can have as many as necessary, requires a condition


# def wwe_smack wrestler
#   if wrestler == 'The Rock'
#     p 'Can you smell what the Rock is cooking?'
#   elsif wrestler == 'Macho Man'
#     p 'Ohhhhh yeahhhh!'
#   elsif wrestler == 'Nature Boy'
#     p 'Wooooooooooooooooooooooo!'
#   else 
#     p 'Sorry that person has been censored'
#   end
# end

# wwe_smack 'Macho Man'
# Output: "Ohhhhh yeahhhh!"

# Getting user input from the terminal
# Content from the terminal will always be a string class.
# gets - keyword that stops the program to allow a user to input data
# store in a variable to use the data later

# gets

# your_name = gets
# p "#{your_name}, give me your age to determine your wrestler costume"
# "Namier\n, give me your age to determine your wrestler costume"

# .chomp removes any non-string characters
# p 'What is your name?'
# your_name = gets.chomp
# p "#{your_name}, give me your age to determine your wrestler costume"
# Output: 
# "What is your name?"
# Type in the terminal ---> Namier
# "Namier, give me your age to determine your wrestler costume"

# p 'p: What is your name?'
# # Output: shows the class "p: What is your name?"
# puts 'puts: What is your name?'
# Output: just shows the raw data
# puts: What is your name?

# p 'What is your name?'
# your_name = gets.chomp
# p "#{your_name}, give me your age to determine your wrestler costume"

# my_age = gets.chomp.to_i

# p my_age.class
# Output: String, the values assigned to the variable in the terminal are strings

# def costume age
#   if age.even?
#     "You will wear a huge robe and glittery ages in the shape of #{age}"
#   else
#     "You will spandex and tube socks embroidered with #{age}"
#   end
# end

# p costume my_age

# Output: 
# "What is your name?"
# Input on the terminal ---> Rashad
# "Rashad, give me your age to determine your wrestler costume"
# Input on the terminal ---> 39
# "You will spandex and tube socks embroidered with 39"