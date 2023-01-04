import classes from "./MobileNavbar.module.css";

const MobileNavbar = ({ open }) => {
	return (
		<div
			style={{ height: open ? "150px" : "0px" }}
			className={classes.mobile_navLinks_container}
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
