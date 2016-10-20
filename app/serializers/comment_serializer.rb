class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :tweet
  has_one :user
end
