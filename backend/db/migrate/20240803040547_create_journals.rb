class CreateJournals < ActiveRecord::Migration[7.1]
  def change
    create_table :journals do |t|
      t.references :user, null: false, foreign_key: true
      t.date :date
      t.text :entry

      t.timestamps
    end
  end
end
