class Service < ApplicationRecord
  belongs_to :appointment
  validates :cost, :perks, :stype, presence: true
end
