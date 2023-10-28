# README

- Create Users
  - username => string
  - name => string
  - bio => string
  - email => string
  - password_digest => string
  - phone => string
  - admin => bool

  NOTE: password and password_confirmation contain the user entered password while password_digest stores the hashed password

- Create Post
  - belongs_to User
  - Content
  - has_many comments
  - has_many likes
  - has_many shares