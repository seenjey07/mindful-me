class JournalsController < ApplicationController
  before_action :authenticate_user!

  def create
    journal = current_user.journals.create(journal_params)
    if journal.save
      render json: journal, status: :created
    else
      render json: journal.errors, status: :unprocessable_entity
    end
  end

  def update
    journal = current_user.journals.find(params[:id])
    if journal.update(journal_params)
      render json: journal
    else
      render json: journal.errors, status: :unprocessable_entity
    end
  end

  def destroy
    journal = current_user.journals.find(params[:id])
    journal.destroy
    head :no_content
  end

  def index
    journals = current_user.journals
    render json: journals
  end

  def show
    journal = current_user.journals.find(params[:id])
    render json: journal
  end


  private

  def journal_params
    params.require(:journal).permit(:date, :entry)
  end
  
end
