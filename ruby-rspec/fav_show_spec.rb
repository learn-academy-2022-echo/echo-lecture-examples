require 'rspec'
require_relative 'fav_show'
# bringing in the functionality from the tv_show file
require_relative 'tv_show'

describe 'FavShow' do
  it 'has to be real' do
    expect{ FavShow.new }.to_not raise_error
  end
  it 'has a collection of tv shows' do
    # Arrange
    fav_list = FavShow.new
    # Act - Assert
    expect(fav_list.shows).to be_an Array

    # Make three TvShows
    transformers = TvShow.new
    pokemon = TvShow.new
    ed_edd_eddy = TvShow.new
    #  Add the Shows to the Fav Shows
    fav_list.add_show transformers
    fav_list.add_show pokemon
    fav_list.add_show ed_edd_eddy
    
    p fav_list.shows
    # [#<TvShow:0x00007f96d5975d88 @title=nil, @watched=false, @episodes=0>, #<TvShow:0x00007f96d5975d38 @title=nil, @watched=false, @episodes=0>, #<TvShow:0x00007f96d5975d10 @title=nil, @watched=false, @episodes=0>]

    expect(fav_list.shows).to contain_exactly(transformers, pokemon, ed_edd_eddy)
  end
end


# output Log 

# FavShow
#   has to be real (FAILED - 1)

# Failures:

#   1) FavShow has to be real
#      Failure/Error: expect{ FavShow.new }.to_not raise_error
     
#        expected no Exception, got #<NameError: uninitialized constant FavShow
#        Did you mean?  TvShow> with backtrace:
#          # ./fav_show_spec.rb:8:in `block (3 levels) in <top (required)>'
#          # ./fav_show_spec.rb:8:in `block (2 levels) in <top (required)>'
#      # ./fav_show_spec.rb:8:in `block (2 levels) in <top (required)>'

# Finished in 0.02202 seconds (files took 0.16098 seconds to load)
# 1 example, 1 failure

# Failed examples:

# rspec ./fav_show_spec.rb:7 # FavShow has to be real

# =>
# Finished in 0.00558 seconds (files took 0.44913 seconds to load)
# 1 example, 0 failures

# =>
# Finished in 0.00478 seconds (files took 0.30611 seconds to load)
# 2 examples, 1 failure

# Failed examples:

# rspec ./fav_show_spec.rb:10 # FavShow has a collection of tv shows
# =>
# Finished in 0.00559 seconds (files took 0.31631 seconds to load)
# 2 examples, 0 failures
# => 
# 1) FavShow has a collection of tv shows
#      Failure/Error: fav_list.add_show transformers
     
#      NoMethodError:
#        undefined method `add_show' for #<FavShow:0x00007f8205130bd0 @shows=[]>
#      # ./fav_show_spec.rb:21:in `block (2 levels) in <top (required)>'

# Finished in 0.0046 seconds (files took 0.37029 seconds to load)
# 2 examples, 1 failure