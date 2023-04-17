# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_17_174826) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "galleries", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "preview_pic"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_galleries_on_user_id"
  end

  create_table "gallery_favorites", force: :cascade do |t|
    t.bigint "gallery_id", null: false
    t.bigint "favorite_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["favorite_id"], name: "index_gallery_favorites_on_favorite_id"
    t.index ["gallery_id"], name: "index_gallery_favorites_on_gallery_id"
  end

  create_table "history_lists", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "url"
  end

  create_table "users", force: :cascade do |t|
    t.string "nickname"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "galleries", "users"
  add_foreign_key "gallery_favorites", "favorites"
  add_foreign_key "gallery_favorites", "galleries"
end
