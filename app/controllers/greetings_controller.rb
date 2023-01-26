class GreetingsController < ApplicationController
  def index
    @greeting = Greeting.all.sample
  end
end
