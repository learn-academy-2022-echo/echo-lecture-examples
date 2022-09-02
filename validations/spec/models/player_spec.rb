require 'rails_helper'

RSpec.describe Player, type: :model do
 describe 'Player Model' do
  it 'throws an error if name is empty' do
    player = Player.create name: nil, position: 'Offensive QB', number:8, td_tackle: 105

    p player.errors[:name]

    expect(player.errors[:name]).to_not be_empty
    expect(player.errors[:name]).to eq ["can't be blank"]
  end
  it 'throws an error if position is empty' do
    player = Player.create name: 'Lamar Jackson', position: nil, number:8, td_tackle: 105

    p player.errors[:position]

    expect(player.errors[:position]).to_not be_empty
    expect(player.errors[:position][0]).to eq "can't be blank"
  end
    it 'throws an error if number is empty' do
    player = Player.create name: 'Lamar Jackson', position: 'Offensive QB', number: nil, td_tackle: 105

    p player.errors[:number]

    expect(player.errors[:number]).to_not be_empty
    expect(player.errors[:number]).to eq ["can't be blank"]
  end
  it 'requires a minimum of 10 characters for position' do
    player = Player.create name: 'Lamar Jackson', position: 'Offen', number:8, td_tackle: 105

    p "Postion Min Length Error should be here"
    p player.errors[:position]

    expect(player.errors[:position]).to_not be_empty
  end
 end
end
