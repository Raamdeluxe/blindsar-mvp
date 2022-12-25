import classes from "./MobileNavbar.module.css";

const MobileNavbar = ({ open }) => {
	const openNavbar = {
		height: "150px",
	};

	const closeNavbar = {
		height: "0px",
	};

	return (
		<div
			className={classes.mobile_navLinks_container}
			style={open ? openNavbar : closeNavbar}
		>
			<ul className={classes.mobile_navLinks}>
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

export default MobileNavbar;
