class User < ApplicationRecord

  has_secure_password

  has_many :posts
  has_many :comments, through: :posts
  has_many :comments

  validates :password_digest, presence: true

  validates :username,  presence: true, uniqueness:true
  validates :name,      presence: true, uniqueness:true
  validates :email,     presence: true, uniqueness:true



end
