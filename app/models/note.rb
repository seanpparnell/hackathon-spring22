class Note < ApplicationRecord
  belongs_to :service

  validates :subject, :body, presence: true
end
