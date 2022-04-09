class Api::ServicesController < ApplicationController
  before_action :set_appointment
  before_action :set_service, only: [:update, :show, :destroy]
  
  def index
    render json: @appointment.services
  end

  def show
    render json: @service
  end

  def create
    @service = @appointment.services.new(service_params)
    if @service.save
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @service.update(service_params)
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @service.destroy
    render json: { message: 'Service deleted'}
  end

  private 
    def set_appointment
      @appointment = Appointment.find(params[:appointment_id])
    end

    def set_service
      @service = @appointment.services.find(params[:id])
    end

    def service_params
      params.require(:service).permit(:stype, :cost, :perks)
    end
end