import classes from "./DesktopNavbar.module.css";

const DesktopNavbar = () => {
	return (
		<div className={classes.desktop_navLinks_container}>
			<ul className={classes.desktop_navLinks}>
				<li>
					<a href="/">About</a>
				</li>
				<li>
					<a href="/">Product</a>
				</li>
				<li>
					<a href="/">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default DesktopNavbar;
