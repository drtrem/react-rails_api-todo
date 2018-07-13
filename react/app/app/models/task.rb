class Task < ApplicationRecord
  belongs_to :project

  validates :name, presence: true
  validates :name, presence: true, on: :update
  validates :project_id, presence: true
  validates :project_id, presence: true, on: :update

end
