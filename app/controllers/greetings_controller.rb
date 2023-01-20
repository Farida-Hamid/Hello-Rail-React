class GreetingsController < ApplicationController
  def index
    @greeting = Greeting.all.shuffle.first
  end
end