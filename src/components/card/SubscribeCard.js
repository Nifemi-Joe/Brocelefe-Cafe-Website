import Logo from "../../assets/images/COffeelogo.svg"
import Logo2 from "../../assets/images/COffee logo2.svg"
import Logo3 from "../../assets/images/COffeelogo3.svg"
import Logo4 from "../../assets/images/COffeelogo4.svg"
import Logo5 from "../../assets/images/COffeelogo5.svg"
import Mail from "../../assets/images/material-symbols_mail.svg"
const SubscribeCard = () => {
	return (
		<section id="contact" className="flex flex-col items-center gap-4 w-10/12 mt-28 mx-auto">
			<div className="flex gap-2.5">
				<div>
					<img src={Logo} alt='Comapny Logo 1'/>
				</div>
				<div>
					<img src={Logo2} alt='Comapny Logo 2'/>
				</div>
				<div>
					<img src={Logo3} alt='Comapny Logo 3'/>
				</div>
				<div>
					<img src={Logo4} alt='Comapny Logo 4'/>
				</div>
				<div>
					<img src={Logo5} alt='Comapny Logo 5'/>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4">
				<h4 className="font-semibold text-3xl dark-brown">News as fresh as our coffee</h4>
				<div className="flex w-full">
					<input placeholder='Your Email Address' className='rounded-none	pl-3 w-full'/>
					<button className="dark-brown-bg flex justify-center items-center w-14"><img src={Mail} alt="Mail"/></button>
				</div>
			</div>
		</section>
	)
}
export default SubscribeCard