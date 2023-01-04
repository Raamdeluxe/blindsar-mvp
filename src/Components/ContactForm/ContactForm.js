import classes from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({});

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		localStorage.setItem("formData", JSON.stringify(formData));
	}

	return (
		<div className={classes.contact_section}>
			<div className={classes.contact_title}>
				<h2>Contact Us</h2>
			</div>
			<div className={classes.contact_container}>
				<div className={classes.contactform_container}>
					<form onSubmit={handleSubmit} className={classes.contactform}>
						<div className={classes.input_field}>
							<label htmlFor="text">First Name</label>
							<input
								type="text"
								name="name"
								onChange={handleChange}
								className={classes.form_control}
							></input>
						</div>
						<div className={classes.input_field}>
							<label htmlFor="text">Email</label>
							<input
								type="email"
								name="email"
								onChange={handleChange}
								className={classes.form_control}
							></input>
						</div>
						<div className={classes.input_field}>
							<label htmlFor="message">Description</label>
							<textarea
								name="message"
								onChange={handleChange}
								className={classes.form_control}
							></textarea>
						</div>
						<button type="submit" className={classes.input_field_submit}>
							<p>Submit</p>
						</button>
					</form>
				</div>
				<div className={classes.location_container}>
					<div className={classes.location_adress_container}>
						<div className={classes.location_address}>
							<h3>Address</h3>
							<p>Brandpunt 1, Heerhugowaard, 1705 SK</p>
							<p>Brandpunt 1, Heerhugowaard, 1705 SK</p>
							<p>Brandpunt 1, Heerhugowaard, 1705 SK</p>
						</div>
						<div className={classes.email_address}>
							<h3>Email Address</h3>
							<p>
								<a href="info@raamdeluxe.nl">info@raamdeluxe.nl</a>
							</p>
						</div>
						<div className={classes.relevante_links}>
							<h3>Relevante links</h3>
							<p>
								Hieronder staan relevante links waaronder ook de ANBI
								informatie:
							</p>
							<ul>
								<li>ANBI-pagina</li>
								<li>ANBI-pagina</li>
								<li>ANBI-pagina</li>
								<li>ANBI-pagina</li>
								<li>ANBI-pagina</li>
								<li>ANBI-pagina</li>
							</ul>
						</div>
						<div className={classes.map_location}>
							<div className={classes.location_image}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
