class Appointment < ApplicationRecord
  belongs_to :user

  validates :appt_location, :appt_date, :appt_time, presence: true
end
