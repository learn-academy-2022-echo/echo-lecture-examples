# Ruby testing with Rspec 8/29/22

# Gems are a package manager system for ruby projects

# TDD (Test Driven Development)
  # Red Green Refactor
    # Write the test -> see it fail -> write the code that makes the test pass -> see it pass


class TvShow
  attr_accessor :title, :watched
  attr_reader :episodes
  
  def initialize 
    # Shadowing your instance variable
    @title = title
    @watched = false
    @episodes = 0
  end

  def add_episodes num
    @watched = true
  # either one works
    # @episodes = @episodes + num
    @episodes += num
  end
  
end