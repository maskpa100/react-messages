import s from "./Navbar.module.css";

const Navbar = () => {
	return <nav className={s.nav}>
		<div className={s.item}>
			<a>Урок 18 0:30</a>
		</div>
		<div className={`${s.item} ${s.active}`}>
			<a>Profile</a>
		</div>
		<div className={s.item}>
			<a>Messager</a>
		</div>
		<div className={s.item}>
			<a>News</a>
		</div>
		<div className={s.item}>
			<a>Music</a>
		</div>
		<div className={s.item}>
			<a>Settings</a>
		</div>
	</nav>
}

export default Navbar;