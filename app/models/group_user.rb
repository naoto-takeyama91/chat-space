class GroupUser < ApplicationRecord
  belongs_to :group, optional: true
  belongs_to :user
end