class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.boolean :status, default: false
      t.references :project, index: true, foreign_key: true

      t.timestamps
    end
  end
end
