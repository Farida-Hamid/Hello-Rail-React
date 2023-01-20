class GreetingController < ApplicationController
  def index
    @greetings = Greeting.all
  end
end