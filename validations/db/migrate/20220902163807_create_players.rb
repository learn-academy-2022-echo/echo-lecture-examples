class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name
      t.string :position
      t.integer :number
      t.integer :td_tackle

      t.timestamps
    end
  end
end
