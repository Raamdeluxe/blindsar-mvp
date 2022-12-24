import classes from "./TopSection.module.css";
import instructionVideo from "../Assets/instruction_video.png";
import heroImage from "../Assets/hero_image.png";

const TopSection = () => {
	return (
		<div className={classes.top_section}>
			<div className={classes.text_container}>
				<h1>
					Duis Nunc Ultricies Bibendum <font color="B2A565">Adipiscing</font>
				</h1>
				<p>
					Donec faucibus cras a quam facilisi convallis nisl velit urna Donec
					faucibus cras a quam facilisi convallis nisl velit urna
				</p>
				<div className={classes.video_container}>
					<img
						className={classes.instruction_video}
						src={instructionVideo}
						alt="instruction video measure window decoration with AR"
					></img>
				</div>
				<div className={classes.interBtn}>
					<button className={classes.shopBtn}>Shop Now</button>
					<button className={classes.exploreBtn}>Explore More</button>
				</div>
			</div>
			<div className={classes.container_hero_image}>
				<div className={classes.hero_image} src={heroImage}></div>
			</div>
		</div>
	);
};

export default TopSection;
