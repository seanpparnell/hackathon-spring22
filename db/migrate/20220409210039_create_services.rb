class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :cost
      t.string :perks
      t.string :stype
      t.belongs_to :appointment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
