import classes from "./TopSection.module.css";

const TopSection = () => {
	return (
		<div className={classes.top_section}>
			<div className={classes.section_01}>
				<div className={classes.text_container}>
					<h1>
						Duis Nunc Ultricies Bibendum <font color="B2A565">Adipiscing</font>
					</h1>
					<p>
						Donec faucibus cras a quam facilisi convallis nisl velit urna Donec
						faucibus cras a quam facilisi convallis nisl velit urna
					</p>
				</div>
				<div className={classes.video_container}>
					<div className={classes.instruction_video}></div>
				</div>
				<div className={classes.interBtn}>
					<button className={classes.shopBtn}>Shop Now</button>
					<button className={classes.exploreBtn}>Explore More</button>
				</div>
			</div>
			<div className={classes.section_02}>
				<div className={classes.container_hero_image}>
					<div className={classes.hero_image}></div>
				</div>
			</div>
		</div>
	);
};

export default TopSection;
