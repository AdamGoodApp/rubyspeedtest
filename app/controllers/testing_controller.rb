class TestingController < ApplicationController


  def index

  end

  def ruby_prime
    render json: Beta.calc
  end

  def c_prime
    render json: Alpha.new.calc(300)
  end


end