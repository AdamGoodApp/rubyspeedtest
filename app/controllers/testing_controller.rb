class TestingController < ApplicationController


  def index

  end

  def three

  end

  def ruby_prime
    render json: Beta.calc(params[:number].to_i)
  end

  def c_prime
    render json: Alpha.new.calc(30000)
  end


end