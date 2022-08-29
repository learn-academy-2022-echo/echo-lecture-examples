# Class Inheritance 8/29/22

#  OOP Object Oriented Programming
  #  A programming paradigm that revolves around the use of classess and objects.
    # A class is a blueprint or recipe for an object
    # An object is the intersection fo data and behavior
    #  Ruby is OOP
      #  C+
      #  Python
      #  C#
      #  Swift
      #  Java
      #  Php
    # Four Pillars of OOP: 
      # Encapsulation - Removing access to parts of your code from other parts of your code, functions, private methods, utility managers... etc
      # Inheritance - Allwos one object to assume all of the attributes and methods of another object. 
      # Polymorphism - " The condition of occruing more than once in a code base in different forms"
      # Abstraction  - To seperate out or hide away deatils of some function or code set inside of another code set. We don't have to understand how it works just what it's desired inputs and expected outputs are. 

    # Classes are made up of nouns and verbs
      # verbs -> Methods
      # nouns -> Data
    

#  Vehicles 
#  Food
#  Pets


class Pet 
  def initialize name_param, species_param
    @is_alive = true
    @age = 0
    @name = name_param
    @species = species_param
  end
  def accident
    @is_alive = false
  end
  def growing
    @age = @age + 1
  end
end

cody = Pet.new("Tank", "dog")

# p cody
# cody.growing
# p cody


#  Class inheritance is utelize all of the code from a Parent class inside of the new class with special syntax 
class Reptile < Pet
  def initialize name_param_for_parent, species_param_for_parent
    # super calls on the initalize method of the parent
      # The super and the parent initalize must have the same order of data. 
    super name_param_for_parent, species_param_for_parent
    @cold_blooded = true
    @hungry = true
  end

  def feed_live_food
    @hungry = false
    p "#{@name} has been fed"
  end
end

# namier = Reptile.new("Gene", "Iguana")
# p namier
# namier.feed_live_food
# p namier


class Insect < Pet
  def initialize name_p, species_p
    super name_p, species_p
    @exoskeleton = true
    @molted = false
  end
  def is_molting?
    if @molted == false
      @molted = true
      p "#{@name} has molted"
    else
      @molted = false
      p "#{@name} is probably going to molt soon"
    end
  end
end

joyce = Insect.new("starwberry", "Butterfly")

p joyce
joyce.is_molting?
p joyce
joyce.is_molting?
p joyce

class Pokemon < Pet
  attr_accessor :evolved
  def initialize name, species, type_param
    super name, species
    @type = type_param
    @evolved = false
    @level = 1
    @moves = []
  end

  def learn_move string
    @moves << string
  end

  def level_up
    @level = @level + 1
  end
end

kelly = Pokemon.new("Dratini", "Aquatic Serpintine Dragon", ["Dragon"])

p kelly

kelly.learn_move('Twister')
kelly.learn_move('Hyper Beam')

p kelly.level_up
p kelly.accident
p kelly