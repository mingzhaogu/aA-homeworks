class UserMailer < ApplicationMailer
  default from: 'from@example.com'

  def welcome_email(user)
    @user = user
    @url = 'http://example.com/login'
    mail(to: "Everybody <everybody@appacademy.io")
  end

end
