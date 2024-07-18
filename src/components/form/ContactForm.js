import User from "../../assets/images/mdi_user.svg"
import Email from "../../assets/images/ic_baseline-email.svg"
import Phone from "../../assets/images/ph_phone-fill.svg"
import Calender from "../../assets/images/solar_calendar-bold.svg"
import Clock from "../../assets/images/ion_time-outline.svg"
import Users from "../../assets/images/gridicons_multiple-users.svg"
import Messages from "../../assets/images/ic_baseline-message.svg"
import ChevronDown from "../../assets/images/ri_arrow-up-s-line.svg"
const ContactForm = () => {
	return (
		<form className="flex flex-col gap-4">
			<div className="flex flex-col gap-4">
				<h4 className="dark-brown text-3xl font-semibold">Book Your Table</h4>
				<p className="dark-blue w-5/6">Figma ipsum component variant main layer.Figma ipsum component variant
					main layer.</p>
			</div>
			<div className="flex flex-col gap-4">
				<div className="grid grid-cols-2 gap-4">
					<div className="relative">
						<input className="w-full" placeholder={'Your Name'}/>
						<img src={User} alt="User" className="absolute top-2 left-2"/>
					</div>
					<div className="relative">
						<input className="w-full" placeholder={'Email Address'}/>
						<img src={Email} alt="Email" className="absolute top-2 left-2"/>
					</div>
					<div className="relative">
						<input className="w-full" placeholder={'Phone Number'}/>
						<img src={Phone} alt="Phone" className="absolute top-2 left-2"/>
					</div>
					<div className="relative">
						<input className="w-full" placeholder={'MM/DD/YY'}/>
						<img src={Calender} alt="Calender" className="absolute top-2 left-2"/>
					</div>
					<div className="relative">
						<input className="w-full" placeholder={'7:00 AM'}/>
						<img src={Clock} alt="Clock" className="absolute top-2 left-2"/>
						<img src={ChevronDown} alt="Chevron Down" className="absolute top-2 right-2"/>

					</div>
					<div className="relative">
						<input className="w-full" placeholder={'03 Persons'}/>
						<img src={Users} alt="Users" className="absolute top-2 left-2"/>
						<img src={ChevronDown} alt="Chevron Down" className="absolute top-2 right-2"/>
					</div>
				</div>
				<div className="relative">
					<textarea placeholder={'Your Message'} rows={8} className="w-full pt-4"></textarea>
					<img src={Messages} alt="Messages" className="absolute top-4 left-2"/>
				</div>
			</div>
			<button
				className="light-brown-bg py-2.5 hover:bg-dark-brown transition-all px-8 rounded-full dark-brown">Submit
			</button>

		</form>
	)
}
export default ContactForm