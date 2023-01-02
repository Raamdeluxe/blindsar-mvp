import classes from "./Footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
	return (
		<div className={classes.footer_section}>
			<div className={classes.footer_container}>
				<div className={classes.company_logo_container}>
					<div className={classes.company_logo_footer}></div>
				</div>
				<div className={classes.footer_content_container}>
					<div className={classes.content_container}>
						<h3>Company</h3>
						<p>About</p>
						<p>Contact Us</p>
					</div>
					<div className={classes.discover}>
						<h3>Discover</h3>
						<p>Our Blog</p>
						<p>Advertising</p>
					</div>
					<div className={classes.legal}>
						<h3>Legal</h3>
						<p>Terms of Use</p>
						<p>Privacy Policy</p>
						<p>Cookie Policy</p>
						<p>All FAQs</p>
					</div>
					<div className={classes.socials}>
						<h3>Connect With Us</h3>
						<span className={classes.social_logos}>
							<AiFillFacebook className={classes.facebook_icon} />
							<AiOutlineInstagram className={classes.instagram_icon} />
							<BsPinterest className={classes.pinterest_icon} />
						</span>
					</div>
				</div>
			</div>
			<div className={classes.copyright_and_terms}>
				<span className={classes.copyright}>
					2021 © Copyright, RaamDelux. All rights reserved.
				</span>
				<span className={classes.terms}>Terms & Privacy | Privacy Policy</span>
			</div>
		</div>
	);
};

export default Footer;
