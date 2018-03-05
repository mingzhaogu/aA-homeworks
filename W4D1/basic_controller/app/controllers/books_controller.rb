class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    render '/books/new.html.erb'
  end

  def create
    new_book = Book.new(book_params)
    if new_book.save!
      redirect_to '/books'
    else
      render :new
    end
  end

  def destroy
    book = Book.find_by(id: params[:id])
    book.destroy

    redirect_to '/books'
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
