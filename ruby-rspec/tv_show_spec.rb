require 'rspec'
require_relative 'tv_show'
# Connect the files using a ruby import -> require

#  To run the file we use the command: 
  # $ rspec tv_show_spec.rb

      # ➜  ruby-rspec git:(rspec) ✗ rspec tv_show_spec.rb 
      # No examples found.

      # Finished in 0.00039 seconds (files took 0.44294 seconds to load)
      # 0 examples, 0 failures

# Built in testing methods
 
#  Describe block 
#    It block
#      Expect Statement

# Example blank test
# describe '' do
#   it'' do
#     expect
#   end
#  end


# describe 'TvShow' do
#   it 'has to be a real class' do
#     expect{ TvShow.new }.to_not raise_error
#   end
#  end

#  We got Red! 
      # a class named TvShow
      #   has to be a real class (FAILED - 1)

      # Failures:

      #   1) a class named TvShow has to be a real class
      #      Failure/Error: expect{ TvShow.new }.to_not raise_error
          
      #        expected no Exception, got #<NameError: uninitialized constant TvShow> with backtrace:
      #          # ./tv_show_spec.rb:30:in `block (3 levels) in <top (required)>'
      #          # ./tv_show_spec.rb:30:in `block (2 levels) in <top (required)>'
      #      # ./tv_show_spec.rb:30:in `block (2 levels) in <top (required)>'

      # Finished in 0.02644 seconds (files took 0.37604 seconds to load)
      # 1 example, 1 failure

      # Got green
          #a class named TvShow
          #   has to be a real class

          # Finished in 0.00553 seconds (files took 0.36815 seconds to load)
          # 1 example, 0 failures



# describe 'TvShow' do
#   it 'has to be a real class' do
#       # curly braces are to create some kind of behavior
#     expect{ TvShow.new }.to_not raise_error
#   end
#   # every it block has its own scope
#   it 'has a title' do
#     # Arrange
#     aang = TvShow.new 
#     # Act 
#     aang.title = 'Avatar: The Last Airbender'
#     # Assert
#       # parens are for creating / changing values
#     expect(aang.title).to be_a String
#     expect(aang.title).to eq 'Avatar: The Last Airbender'
#   end
# end

  # Red Output =>  TvShow
                #   has to be a real class
                #   has a title (FAILED - 1)

                # Failures:

                #   1) TvShow has a title
                #     Failure/Error: aang.title = 'Avatar: The Last Airbender'
                    
                #     NoMethodError:
                #       undefined method `title=' for #<TvShow:0x00007fb57d087750>
                #     # ./tv_show_spec.rb:70:in `block (2 levels) in <top (required)>'

                # Finished in 0.0038 seconds (files took 0.45444 seconds to load)
                # 2 examples, 1 failure

                # Failed examples:

                # rspec ./tv_show_spec.rb:66 # TvShow has a title 


  # Update the tv_show code - Green
    # Output => TvShow
                #   has to be a real class
                #   has a title

                # Finished in 0.00532 seconds (files took 0.35203 seconds to load)
                # 2 examples, 0 failures



# describe 'TvShow' do
#   it 'has to be a real class' do
#     expect{ TvShow.new }.to_not raise_error
#   end
#   it 'has a title' do
#     aang = TvShow.new 
#     aang.title = 'Avatar: The Last Airbender'
#     expect(aang.title).to be_a String
#     expect(aang.title).to eq 'Avatar: The Last Airbender'
#   end
#   it 'can have a status of watched' do
#     # Arrange
#     cosby_show = TvShow.new
#     # Act - Assert
#     expect(cosby_show.watched).to eq false
#     expect(cosby_show.watched).to be_a FalseClass
#     # update the test value
#     cosby_show.watched = true
#     expect(cosby_show.watched).to eq true
#     expect(cosby_show.watched).to be_a TrueClass
#   end
# end

# output => can have a status of watched (FAILED - 1)

        # Failures:
        #   1) TvShow can have a status of watched
        #      Failure/Error: expect(cosby_show.watched).to eq false
        #      NoMethodError:
        #        undefined method `watched' for #<TvShow:0x00007fb7af168820 @title=nil>
        #      # ./tv_show_spec.rb:123:in `block (2 levels) in <top (required)>'
        # Finished in 0.00501 seconds (files took 0.32237 seconds to load)
        # 3 examples, 1 failure
        # Failed examples:
        # rspec ./tv_show_spec.rb:119 # TvShow can have a status of watched

        # updated the code 

  #output => TvShow
          #   has to be a real class
          #   has a title
          #   can have a status of watched

          # Finished in 0.00683 seconds (files took 0.29441 seconds to load)
          # 3 examples, 0 failures


# describe 'TvShow' do
#   it 'has to be a real class' do
#     expect{ TvShow.new }.to_not raise_error
#   end
#   it 'has a title' do
#     aang = TvShow.new 
#     aang.title = 'Avatar: The Last Airbender'
#     expect(aang.title).to be_a String
#     expect(aang.title).to eq 'Avatar: The Last Airbender'
#   end
#   it 'can have a status of watched' do
#     # Arrange
#     cosby_show = TvShow.new
#     # Act - Assert
#     expect(cosby_show.watched).to eq false
#     expect(cosby_show.watched).to be_a FalseClass
#     # update the test value
#     cosby_show.watched = true
#     expect(cosby_show.watched).to eq true
#     expect(cosby_show.watched).to be_a TrueClass
#   end
#   it 'has episodes' do
#     # Arrange
#     lizzie_mcguire = TvShow.new 
#     # Act - Assert
#     expect(lizzie_mcguire.episodes).to be_a Numeric
#     expect(lizzie_mcguire.episodes).to eq 0
#   end
# end

# output => TvShow
          #   has to be a real class
          #   has a title
          #   can have a status of watched
          #   has episodes (FAILED - 1)
          # Failures:
          #   1) TvShow has episodes
          #     Failure/Error: expect(lizzie_mcguire.episodes).to be_a Numeric
          #     NoMethodError:
          #       undefined method `episodes' for #<TvShow:0x00007fe7798acb50 @title=nil, @watched=false>
          #     # ./tv_show_spec.rb:181:in `block (2 levels) in <top (required)>'
          # Finished in 0.00678 seconds (files took 0.30514 seconds to load)
          # 4 examples, 1 failure
          # Failed examples:
          # rspec ./tv_show_spec.rb:177 # TvShow has episodes

  # updated the code on tv_show.rb
    # output => TvShow
              #   has to be a real class
              #   has a title
              #   can have a status of watched
              #   has episodes

              # Finished in 0.0053 seconds (files took 0.23458 seconds to load)
              # 4 examples, 0 failures



describe 'TvShow' do
  it 'has to be a real class' do
    expect{ TvShow.new }.to_not raise_error
  end
  it 'has a title' do
    aang = TvShow.new 
    aang.title = 'Avatar: The Last Airbender'
    expect(aang.title).to be_a String
    expect(aang.title).to eq 'Avatar: The Last Airbender'
  end
  it 'can have a status of watched' do
    # Arrange
    cosby_show = TvShow.new
    # Act - Assert
    expect(cosby_show.watched).to eq false
    expect(cosby_show.watched).to be_a FalseClass
    # update the test value
    cosby_show.watched = true
    expect(cosby_show.watched).to eq true
    expect(cosby_show.watched).to be_a TrueClass
  end
  it 'has episodes' do
    # Arrange
    lizzie_mcguire = TvShow.new 
    # Act - Assert
    expect(lizzie_mcguire.episodes).to be_a Numeric
    expect(lizzie_mcguire.episodes).to eq 0
  end
  it 'can add episodes' do
    # Arrange
    xmen_evolutions = TvShow.new
    # Act 
    xmen_evolutions.add_episodes 6
    # Assert
    expect(xmen_evolutions.episodes).to be 6
    expect{ xmen_evolutions.add_episodes 1 }.to change{ xmen_evolutions.episodes }.from(6).to(7)
  end
end


# output => Failures:
          #   1) TvShow can add episodes
          #      Failure/Error: xmen_evolutions.add_episodes 6
          #      NoMethodError:
          #        undefined method `add_episodes' for #<TvShow:0x00007fc9be8a1530 @title=nil, @watched=false, @episodes=0>
          #      # ./tv_show_spec.rb:246:in `block (2 levels) in <top (required)>'
          # Finished in 0.00668 seconds (files took 0.39294 seconds to load)
          # 5 examples, 1 failure
          # Failed examples:
          # rspec ./tv_show_spec.rb:242 # TvShow can add episodes

          # Updated code in tv_show.rb
          # output => Finished in 0.00748 seconds (files took 0.32491 seconds to load)
            # 5 examples, 0 failures  
            # Finished in 0.01206 seconds (files took 0.41748 seconds to load)
            # 5 examples, 0 failures


