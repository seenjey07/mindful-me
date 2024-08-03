class CreateMoods < ActiveRecord::Migration[7.1]
  def change
    create_table :moods do |t|
      t.references :user, null: false, foreign_key: true
      t.date :date
      t.string :mood

      t.timestamps
    end
  end
end
