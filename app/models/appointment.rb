class Appointment < ApplicationRecord
  belongs_to :user
  has_many :services 
  validates :appt_location, :appt_date, :appt_time, presence: true


end
