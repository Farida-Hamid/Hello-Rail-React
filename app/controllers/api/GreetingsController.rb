class Api::GreetingsController < ApplicationController
  def index
    messages = Greeting.all.shuffle.first
    render json: messages
  end
end