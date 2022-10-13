import s from "./Profile.module.css";
import MyPost from './MyPost/MyPost';

const Profile = () => {
	return <div>
		<div>
			<img src="https://inspokavto-msk.ru/wp-content/uploads/2017/02/2-2-300x80.jpg" />
		</div>
		<div>
			ava + description
		</div>
		<MyPost />
	</div>
}

export default Profile;