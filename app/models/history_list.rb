class HistoryList < ApplicationRecord
  def index
    if params[:user_id]
      user_id = User.find(params[:user_id])
      history_list = user_id.history_list
    else
      history_list = HistoryList.all
    end
    render json: history_list, status: :ok
  end

def update
    @history_list.update(history_params)
    render json: @history_list, status: :accepted
end

private

def history_list_params
    params.permit()
end

end
