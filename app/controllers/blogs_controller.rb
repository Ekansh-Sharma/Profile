class BlogsController < ApplicationController
	http_basic_authenticate_with name: "aa", password: "aa", except: [:index, :show]
	def new
		@blog=Blog.new
	end
	def index
		@blog=Blog.all
	end
	def create
		@blog=Blog.new(blog_params);
		if @blog.save
			redirect_to @blog
		else
			render 'new'
		end 
	end
	def edit
		@blog=Blog.find(params[:id])
	end
	def destroy
		@blog=Blog.find(params[:id])
		@blog.destroy
		redirect_to blogs_path
	end
	def update
		@blog=Blog.find(params[:id])
		if @blog.update(blog_params)
			redirect_to @blog
		else
			render 'edit'
		end
	end
	def show
		@blog=Blog.find(params[:id])
	end
	private
	def blog_params
		params.require(:blog).permit(:title,:body)
	end
end
