class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :posts_id
      t.integer :user_id
      t.string :content
      t.integer :likes

      t.timestamps
    end
  end
end
