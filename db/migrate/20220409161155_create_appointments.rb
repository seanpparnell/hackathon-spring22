class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string :appt_location
      t.datetime :appt_date
      t.datetime :appt_time
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
