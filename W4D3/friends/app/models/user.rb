# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates_presence_of :username, :session_token
  validates_presence_of :password_digest, :message => "Password can't be blank."
  validates_presence_of :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    unless self.find_by(username: username) && self.is_password?(password)
      return false
    end
  end

  def reset_session_token!
    self.session_token = nil
    self.save!
  end

  def ensure_session_token
    if session_token.nil?
      self.session_token = generate_session_token
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password
    @password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
