import s from "./Post.module.css";

const Post = (props) => {
	return <div>
			<div className={s.item}>
			  <img src="https://anticwar.ru/wp-content/uploads/wp_article/2021-11-23/2021-11-23_677341675205681.jpeg" />
			  {props.messages}
			  <div>
			  Лайки 5
			  </div>
			</div>
		</div>
}

export default Post;