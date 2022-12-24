import classes from "./NavBar.module.css";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
	return (
		<nav className={classes.navBar_section}>
			<div className={classes.logo_container}>
				<div className={classes.company_logo}></div>
			</div>
			<div className={classes.navLinks_container}>
				<ul className={classes.navLinks}>
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
			<div className={classes.cart_container}>
				<button className={classes.cart_button}>
					<AiOutlineShoppingCart className={classes.cart} />
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
