import classes from "./ProductSection.module.css";

const ProductSection = () => {
	return (
		<div className={classes.product_section}>
			<div className={classes.text_container}>
				<h3>Product Title</h3>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>
				<button className={classes.measureBtn}>Measure now</button>
			</div>
			<div className={classes.image_container}>
				<div className={classes.image}></div>
			</div>
		</div>
	);
};

export default ProductSection;
