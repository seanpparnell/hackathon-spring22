class Service < ApplicationRecord
  belongs_to :appointment
  has_many :notes
  validates :cost, :perks, :stype, presence: true
end
