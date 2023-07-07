class V1::UsersController < ApplicationController
    def index
        @users = User.all

        render json: @users, status: :ok, each_serializer: UserSerializer
    end

    def create
        @user = User.new(user_params)

        if @user.save
        else
            render json: @user.errors, status: unprocessable_entity
        end
    end

    def destroy
        @user = User.where(id: params[:id]).first
        if @user.destroy
            head(:ok)
        else
            head(:unprocessable_entity)
        end
    end

    def update
        @user = user.find(params[:id])
        if @user.update(user_params)
            render json: @user
        else
            render :edit
        end
    end

    def show
        @user = User.find(params[:id])

        render json: @user, status: :ok
    end

    private
    def user_params
        params.require(:user).permit(:id,:first_name,:last_name,:email,:password_digest,:favorite_subject,:rating,:date_of_birth)
    end
end