import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import company_logo from "../Assets/companylogo_raamdeluxe.png";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<nav className={classes.navbar_section}>
				<div className={classes.navBtn}>
					<button onClick={() => setOpen(!open)}>
						{open ? (
							<GiHamburgerMenu className={classes.hamburger} />
						) : (
							<RxCross2 className={classes.hamburger} />
						)}
					</button>
				</div>
				<div className={classes.logo_container}>
					<img
						className={classes.company_logo}
						src={company_logo}
						alt="Raamdeluxe bedrijfslogo"
					/>
				</div>
				<DesktopNavbar />
				<div className={classes.cart_container}>
					<button className={classes.cart_button}>
						<AiOutlineShoppingCart className={classes.cart} />
					</button>
				</div>
			</nav>
			<MobileNavbar open={!open} />
		</>
	);
};

export default Navbar;
