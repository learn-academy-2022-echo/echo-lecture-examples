class CreateSchedules < ActiveRecord::Migration[7.0]
  def change
    create_table :schedules do |t|
      t.string :event_name
      t.date :date
      t.string :time
      t.string :location

      t.timestamps
    end
  end
end
