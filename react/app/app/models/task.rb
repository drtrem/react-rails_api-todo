class Task < ApplicationRecord
  belongs_to :project
  acts_as_list scope: :project

  validates :name, presence: true, on: :update
  validates :project_id, presence: true, on: :update

end
