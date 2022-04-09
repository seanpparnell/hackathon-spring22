class Api::NotesController < ApplicationController
  before_action :set_service
  before_action :set_note, only: [:update, :show, :destroy]
  
  def index
    render json: @service.notes
  end

  def show
    render json: @note
  end

  def create
    @note = @service.notes.new(note_params)
    if @note.save
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @note.destroy
    render json: { message: 'Note deleted'}
  end

  private 
    def set_service
      @service = Service.find(params[:service_id])
    end

    def set_note
      @note = @service.notes.find(params[:id])
    end

    def note_params
      params.require(:note).permit(:subject, :body)
    end
end