class Api::GreetingsController < ApplicationController
  def index
    messages = Greeting.all.sample
    render json: messages
  end
end
