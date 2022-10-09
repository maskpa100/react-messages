import s from "./MyPost.module.css";
import Post from './Post/Post';

const MyPost = () => {
	return  <div>
			My post 
			<div>
			  <textarea></textarea>
			  <button>Новый пост</button>
			</div>
			<Post 	messages="Привет" />
			<Post 	messages="Я свододин" />
			<Post 	messages="Как птица в небесах" />
		</div>
}

export default MyPost;