class Api::AppointmentsController < ApplicationController
  before_action :set_user
    before_action :set_appointment, only: [:show, :update, :destroy]
  
    def index
      
      render json: @current_user.appointments
    end
    
   
  
    def show
      render json: @appointment
    end
  
    def create
      @appointment = @current_user.appointments.new(appointment_params)
      if @appointment.save
        render json: @appointment
      else
        render json: { errors: @appointment.errors }, status: :unprocessable_entity
      end
    end
  
    def update
      if @appointment.update(appointment_params)
        render json: @appointment
      else
        render json: { errors: @appointment.errors }, status: :unprocessable_entity
      end
    end
  
  
  
    def destroy
      @appointment.destroy
      render json: { message: 'Appointment Deleted'}
    end
  
    private
  
    def set_user
      @current_user = User.find(params[:user_id])
    end
  
      def set_appointment
        @appointment = @current_user.appointments.find(params[:id])
      end
  
      def appointment_params
        params.require(:appointment).permit(:appt_location, :appt_date, :appt_time)
      end
end
