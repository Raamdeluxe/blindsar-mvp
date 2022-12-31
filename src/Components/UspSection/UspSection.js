import classes from "./UspSection.module.css";
import { BsCheckLg } from "react-icons/bs";

const UspSection = () => {
	return (
		<div className={classes.usp_section}>
			<div className={classes.usp_image_container}>
				<div className={classes.usp_image}></div>
			</div>
			<div className={classes.usp_content_container}>
				<div className={classes.usp_text_container}>
					<h2>Tristique malesuada in purus, pellentesque</h2>
					<p>Massa magna nibh at tincidunt</p>
				</div>
				<div className={classes.usp_container}>
					<h3>Scelerisque accumsan diam potenti vestibulum</h3>
					<div className={classes.usp_list}>
						<div className={classes.usp_icon}>
							<BsCheckLg />
						</div>
						<p clasName={classes.usp_text}>
							Pretium lectus quam id leo in vitae turpis
						</p>
					</div>
					<div className={classes.usp_list}>
						<div className={classes.usp_icon}>
							<BsCheckLg />
						</div>
						<p clasName={classes.usp_text}>
							Pretium lectus quam id leo in vitae turpis
						</p>
					</div>
					<div className={classes.usp_list}>
						<div className={classes.usp_icon}>
							<BsCheckLg />
						</div>
						<p clasName={classes.usp_text}>
							Pretium lectus quam id leo in vitae turpis
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UspSection;
