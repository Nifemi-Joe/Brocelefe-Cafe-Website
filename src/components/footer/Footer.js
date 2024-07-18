import Logo from "../../assets/images/logo-white.svg"
import Snapchat from "../../assets/images/uil_snapchat-alt.svg"
import Twitter from "../../assets/images/uil_twitter-alt.svg"
import Whatsapp from "../../assets/images/uil_whatsapp.svg"
import Facebook from "../../assets/images/uil_facebook-f.svg"
import FacebookMessenger from "../../assets/images/uil_facebook-messenger-alt.svg"
const Footer = () => {
	return (
		<footer className="mt-28 middle-brown-bg">
			<div className="w-10/12 mx-auto flex flex-col items-center pt-20 pb-20">
				<div className="flex justify-between items-center w-full">
					<div className="flex flex-col gap-4">
						<h6 className="font-medium text-xl dark-brown">Contact</h6>
						<div className="flex flex-col">
							<span className="dark-brown">Phone: 0225566734</span>
							<span className="dark-brown">Email: lache@example.com</span>
							<span className="dark-brown">Address: NY, Linn Dr 238</span>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<h6 className="font-medium text-xl dark-brown">Locations</h6>
						<div className="flex flex-col">
							<span className="dark-brown">LA, Halatio Ave 16</span>
							<span className="dark-brown">New York, Linn Dr 238</span>
							<span className="dark-brown">LA, Halatio Ave 9</span>
						</div>
					</div>
					<div>
						<img src={Logo} alt="Logo White"/>
					</div>
					<div className="flex flex-col gap-4">
						<h6 className="font-medium text-xl dark-brown">Information</h6>
						<div className="flex flex-col">
							<a href="#home"><span className="dark-brown">About</span></a>
							<a href="#contact"><span className="dark-brown">Contact</span></a>
							<a href="#contact"><span className="dark-brown">Reservations</span></a>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<h6 className="font-medium text-xl dark-brown">Opening hours</h6>
						<div className="flex flex-col">
							<span className="dark-brown">Mon - Fri   09-22</span>
							<span className="dark-brown">Saturday  09-01</span>
							<span className="dark-brown">Sunday     09-23</span>
						</div>
					</div>
				</div>
				<div className="flex gap-2">
					<a href={'#'}><img src={Snapchat} alt={'Snapchat'}/></a>
					<a href={'#'}><img src={Twitter} alt={'Twitter'}/></a>
					<a href={'#'}><img src={Whatsapp} alt={'Whatsapp'}/></a>
					<a href={'#'}><img src={Facebook} alt={'Facebook'}/></a>
					<a href={'#'}><img src={FacebookMessenger} alt={'Facebook eMessenger'}/></a>
				</div>
			</div>
		</footer>
	)
}
export default Footer