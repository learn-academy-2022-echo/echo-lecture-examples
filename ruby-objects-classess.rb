# Ruby Objects and Classes 8/26/22

# Output => 

# Vocab 
#  class
#  instance
#  instance variable
#  initialize method
#  setter method 
#  getter method 
    # attribute accessor
#  super()

#  p 1.class 
#  # Output => Integer

#  p [].class
#  # Output => Array

#  p 'Hello Echo'.class
# # Output => String

#  p 1.class.class

#  Ruby Object: A collection of key value pairs && an instance of a class.

# class takes an argument of a custom name in PascalCase
class Player 
# class scope is defined by the words class / end

# methods can live inside of classes
  def set_player_name parameter
    # Methods syntax is exactly the same as it is in the rest of ruby
    player_name = parameter 
  end
end

# p player_one = Player.new
 #Output => <Player:0x00007fd39d8d8b00>

# player_one.set_player_name 'Brook'

# p player_one
# Output => <Player:0x00007fd39d8d8b00>




class Player 
  def set_player_name parameter
    # instance variable give access to the variable from anywhere inside the class-- or anywhere that has access to the class.
    @player_name = parameter 
  end
end

# p player_one = Player.new


# player_one.set_player_name 'Brook'

# p player_one


class Paladin
  # Setter methods
    def set_paladin_name paladin_param
      @name = paladin_param
    end
  # Getter Methods
    def get_paladin_name
      @name
    end
end

# p cliff = Paladin.new
# cliff.set_paladin_name('Legendairy')
# p cliff.get_paladin_name


# class Ranger
#   def initialize name_param, weapon_param, pet_param
#     @name = name_param
#     # @weapon = "Bow and Doggo"
#     @weapon = weapon_param
#     @pet = pet_param
#   end
# end

# p cody = Ranger.new('Stevie Wander', 'Microphone', 'Parrot')
# p fransico = Ranger.new('Ron Stoppable', 'Hands', 'Rufus the naked molerat')


class Monk
  attr_accessor :name, :special_power, :hair_color, :spirit_animal 

  def initialize name_param, hair_color, special_param, spirit_animal_param
    @hair_color = hair_color
    @spirit_animal = spirit_animal_param
    @special_power = special_param
    @name = name_param
  end
  def get_hair_story 
    p "#{@name} dyed his hair #{@hair_color}"
  end
end

p hieu = Monk.new('Tony Shaloub', 'Green', 'Speed Walking', 'Flying bison')
# attr_accessor allows us to work with instance variables as if they were variables we could assign and read. 
hieu.hair_color = 'purple'
# p hieu
# p hieu.hair_color
hieu.get_hair_story

p rashad = Monk.new('Aang', 'bald', 'air bending', 'Momo the Lemur')

rashad.hair_color = 'chia'

rashad.get_hair_story

