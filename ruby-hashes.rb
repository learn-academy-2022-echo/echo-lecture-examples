# Ruby Hash 8/24/22 Echo

# Hash - a collection of unique keys and their values

# Two ways to create a hash - literal form or new method

# 1st way to create a hash
# literal form {}
# variable_name, assignment operator, {key:value pairs} 
# echo_bbq = {mashed_potatoes: 'Chantelle', baked_beans: 'Cody', macaroni_salad: 'Cathrine', potato_salad: 'Vanessa'}
# p echo_bbq
# Output:
  # {:mashed_potatoes=>"Chantelle", :baked_beans=>"Cody", :macaroni_salad=>"Cathrine", :potato_salad=>"Vanessa"}

# 2nd way to create a hash
# new method - creates an empty Hash, by instantiating a Hash class
# echo_bbq = Hash.new
# p echo_bbq
# Output: {}

# The key is a symbol
# keys and values in a hash can be any datatype/class
# pairs are comma separated

# p echo_bbq
# Output:
  # {:mashed_potatoes=>"Chantelle", :baked_beans=>"Cody", :macaroni_salad=>"Cathrine", :potato_salad=>"Vanessa"}
# ********************Explanation of the output
# older syntax had colon on the left of the key which required a hash rocket =>
# If you are using other datatypes/classes for your key, need => hash rocket
# echo_bbq = {'mashed_potatoes' => 'Chantelle'}
# p echo_bbq
# Output: {"mashed_potatoes"=>"Chantelle"}


# {key:value}
# key can be any datatype/class
# echo_bbq = {mashed_potatoes: 'Chantelle', baked_beans: 'Cody', macaroni_salad: 'Cathrine', potato_salad: 'Vanessa'}
# symbols are mashed_potatoes:, baked_beans:, macaroni_salad:, potato_sald:
# the symbol datatype is being used for the key

# echo_bbq = {'mashed_potatoes' => 'Chantelle', baked_beans: 'Cody', macaroni_salad: 'Cathrine', potato_salad: 'Vanessa'}
# p echo_bbq
# string 'mashed_potatoes' is being used as a key therefore =>
# symbol used as a key  potato_salad:, macaroni_salad:, baked_beans: therefore no =>

# CRUD actions
bbq_meals = {mashed_potatoes: 4, baked_beans: 2, macaroni_salad: 5, potato_salad: 2}

# Create content
# symbol in square brackets and assign a value
# symbol is reference with the colon in front of the name
bbq_meals[:grilled_corn] = 3
# p bbq_meals
# Output:
  # {:mashed_potatoes=>4, :baked_beans=>2, :macaroni_salad=>5, :potato_salad=>2, :grilled_corn=>3}

bbq_meals[:watermelon] = 1
# p bbq_meals
# Output:
  # {:mashed_potatoes=>4, :baked_beans=>2, :macaroni_salad=>5, :potato_salad=>2, :grilled_corn=>3, :watermelon=>1}

# Read the content
# Display all key value pairs 
# p bbq_meals
# Output:
  # {:mashed_potatoes=>4, :baked_beans=>2, :macaroni_salad=>5, :potato_salad=>2, :grilled_corn=>3, :watermelon=>1}

# Display a specific value
# p bbq_meals[:baked_beans]
  # Output: 2

# Update the content
# bbq_meals[:mashed_potatoes] = 3
# p bbq_meals
# Output:
  # {:mashed_potatoes=>3, :baked_beans=>2, :macaroni_salad=>5, :potato_salad=>2, :grilled_corn=>3, :watermelon=>1}

bbq_meals[:mashed_potatoes] = 4
bbq_meals[:baked_beans] = 1
bbq_meals[:watermelon] = 2
# p bbq_meals
# Output:
  # {:mashed_potatoes=>4, :baked_beans=>1, :macaroni_salad=>5, :potato_salad=>2, :grilled_corn=>3, :watermelon=>2}

# Delete the content
# .delete() method
bbq_meals.delete(:mashed_potatoes)
# p bbq_meals
# Output:
  # {:baked_beans=>1, :macaroni_salad=>5, :potato_salad=>2, :grilled_corn=>3, :watermelon=>2}


# Enumerable module
# Module - grouping like things, objects that have similar properties
# Enumerable - objects that are iterable, such as hashes, arrays, ranges

# Duck typing - basing the use of a method on the behavior of an object rather than its class

# each method
# bbq_meals.each do |key, value|
#   value += 1
#  p "We have a total of #{value} #{key}"
# end

# p bbq_meals

# Output:
  # "We have a total of 2 baked_beans"
  # "We have a total of 6 macaroni_salad"
  # "We have a total of 3 potato_salad"
  # "We have a total of 4 grilled_corn"
  # "We have a total of 3 watermelon"

  # Hash has not been altered
  # {:baked_beans=>1, :macaroni_salad=>5, :potato_salad=>2, :grilled_corn=>3, :watermelon=>2}
# each method will not change the hash

# map method
# bbq_meals.map do |key, value|
#   value += 1
#   p "Who is bringing those #{value} #{key} to the bbq?"
# end

# p bbq_meals

# Output:
  # "Who is bringing those 2 baked_beans to the bbq?"
  # "Who is bringing those 6 macaroni_salad to the bbq?"
  # "Who is bringing those 3 potato_salad to the bbq?"
  # "Who is bringing those 4 grilled_corn to the bbq?"
  # "Who is bringing those 3 watermelon to the bbq?"
  # {:baked_beans=>1, :macaroni_salad=>5, :potato_salad=>2, :grilled_corn=>3, :watermelon=>2}


# Manipulating data
# Map wants to return an array not the hash. It can transform the array without changing the original hash.
# store the mapping in a variable to assess the array

# ****Additional Notes****
# more_bbq = bbq_meals.map do |key, value|
#   value
# end

# p more_bbq
# Output: [1, 5, 2, 3, 2]

# p bbq_meals
# Output
  # {:baked_beans=>1, :macaroni_salad=>5, :potato_salad=>2, :grilled_corn=>3, :watermelon=>2}
# ********

# more_bbq = bbq_meals.map do |key, value|
#   value += 1
# end

# p more_bbq
# Output: [2, 6, 3, 4, 3]

# p bbq_meals
# Output:  
  # {:baked_beans=>1, :macaroni_salad=>5, :potato_salad=>2, :grilled_corn=>3, :watermelon=>2}