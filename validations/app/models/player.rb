class Player < ApplicationRecord
  validates :name, :position, :number, presence: true
  validates :position, length: { minimum: 10 }
end
