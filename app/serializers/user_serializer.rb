class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password, :username, :favorite_subject, :rating, :date_of_birth
end
