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

- Create Posts
  - belongs_to User
  - Content => string
  - has_many comments
  - likes => integer
  - shares => integer

- Create Comments
  - belongs_to Post
  - belongs_to User
  - content => string
  - likes => integer

