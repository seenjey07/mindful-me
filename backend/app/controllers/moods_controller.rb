class MoodsController < ApplicationController
  before_action :authenticate_user!

  def create
    mood = current_user.moods.create(mood_params)
    render json: mood
  end

  def update
    mood = current_user.moods.find(params[:id])
    mood.update(mood_params)
    render json: mood
  end

  def destroy
    mood = current_user.moods.find(params[:id])
    mood.destroy
    head :no_content
  end

  def index 
    moods = current_user.moods
    render json: moods
  end

  def show
    mood = current_user.moods.find(params[:id])
    render jason: mood
  end


  private
  
  def mood_params
    params.require(:mood).permit(:date, :mood)
  end

end
