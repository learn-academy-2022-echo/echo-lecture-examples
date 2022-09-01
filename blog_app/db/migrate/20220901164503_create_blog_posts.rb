class CreateBlogPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :blog_posts do |t|
      t.string :title
      t.text :post
      t.string :img_url
      t.integer :user_id

      t.timestamps
    end
  end
end
