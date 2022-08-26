# Ruby Blocks 8/24/22

# While Loop
  # Works like a condtional and iterates until the condition is met
  # scope is definedc by the while and end
p 'Good Morning Echo'

# num = 1

# while num <= 10
#   # num = num + 1
#   num += 1
#   p 'echo'
# end
num = 1
nums_array = []

while num <= 10
  nums_array << num 
  num += 1
end

# p nums_array

# do blocks
  # do blocks have their own syntax for parameters
  # blocks in ruby use pipes to define parameters
  #  |parameter|

# Each / Each do
  #  the each method takes a special set of code called a block as an argument
  #  each needs an array to operate on

  echo_array = ['Jason', 'Namier', 'Cliff', 'Scott']

  # each iterates the same number of times as the length of the array it is operating on 
  # echo_array.each do
  #   p 'Hey Echo'
  # end

  # echo_array.each do |value|
  #   p "hey #{value}"
  # end

  # curly brack syntax
    # must be on one line
  #  echo_array.each { |value| p "hey #{value}" }

# Range
  # range syntax is ..
  # starting value and ending value

# num_range = 1..99
# p num_range

# num_range.each do |number|
#   p number
# end

# letter_range = 'a'..'z'

# letter_range.each do |letter|
#   p letter
# end
   
# letter_range = 'A'..'z'

# letter_range.each do |homelander|
#   p homelander
# end
  

# num_range = 1..99

# num_range.each do |x|
#   if x.even?
#     p 'even'
#   else 
#     p x
#   end
# end

# Map
  # similar to each in that it takes a do block as an argument
  # collects all of the returns into an array of the same length it operated on

num_range = 1..99
# splat operator
# nums_array = [*num_range]
nums_array = Array(num_range)

# p nums_array

# nums_array.map do |number|
#   number * 3
# end

# p nums_array
#  out put each number in the original array

# map wants to be assigned to some variable or an implicit return 
mult_three = nums_array.map do |number|
  number * 3
end

# p mult_three

# pseudo code 
#  create a method that takes in a range and returns an array with numbers and the word even. The word even should show up in place of the even numbers

# create a method with the key word def
  # named even_or_odd
  # takes in a parameter of range
  def even_or_odd range
    # implicit return the map
    # use map to iterate over the range 
      # use pipes to access values
    range.map do |value|
      # use a condtional to make descions
      if value.even?
        # if the number is even print even
        p 'even'
        # else print number
      else
        p value
      end
    end
  end

# even_or_odd 68..420

# Select  - it's moslty like filter

nums = [2,3,4,5,6,7,8,9]

def is_even array_hey_cliff
  array_hey_cliff.select do |current_num_in_array|
    # current_num_in_array % 2 == 0
    current_num_in_array.even?
  end
end

# p is_even nums

words = ['bussin', 'bruh', 'glizzy', 'sus', 'based', 'cap', 'facts' ]

def has_e array
  array.select do |holden_like_whatever_man|
    holden_like_whatever_man.include?('e')
  end
end

# p has_e words

def has_letter array, letter
  array.select do |holden_like_whatever_man|
    holden_like_whatever_man.include?()
  end
end

p has_letter words, 'i'
p has_letter words, 'b'