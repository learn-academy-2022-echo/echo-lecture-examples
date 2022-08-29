class FavShow
  attr_accessor :shows
  def initialize
    @shows = []
  end

  def add_show series
    @shows << series
  end
end