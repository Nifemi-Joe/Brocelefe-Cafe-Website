import ContactForm from "../form/ContactForm";
import Coffee from "../../assets/images/COFFEEpoured1.svg"
const ContactCard = () => {
	return (
		<section className="w-9/12 flex mt-28 mx-auto">
			<ContactForm/>
			<div className="w-3/5">
				<img src={Coffee} alt="Coffee Poured"/>
			</div>
		</section>
	)
}
export default ContactCard