import Croissant from "../../assets/images/croissant.svg"
import Burger from "../../assets/images/burger.svg"
import Pie from "../../assets/images/pie.svg"
const TeamCard = () => {
	return (
		<section id="team" className="w-9/12 mx-auto mt-24 flex flex-col items-center gap-8">
			<div className="flex flex-col items-center gap-4">
				<h4 className="text-center dark-brown font-semibold text-3xl">Made Freshly For You</h4>
				<p className="text-center dark-blue">Figma ipsum component variant main layer. Hand editor object project shadow opacity project object community rotate.</p>
			</div>
			<div className="flex gap-8">
				<div className="flex flex-col items-center gap-5">
					<div>
						<img src={Croissant} alt="Croissant"/>
					</div>
					<div className="flex flex-col items-center gap-4">
						<h4 className="font-medium text-xl dark-brown">Breakfast</h4>
						<button className="light-brown-bg py-2.5 hover:bg-dark-brown transition-all hover:text-red-500 px-8 rounded-full dark-brown">View More</button>
					</div>
				</div>
				<div className="flex flex-col items-center gap-5">
					<div>
						<img src={Burger} alt="Burger"/>
					</div>
					<div className="flex flex-col items-center gap-4">
						<h4 className="font-medium text-xl dark-brown">Lunch</h4>
						<button className="light-brown-bg py-2.5 hover:bg-dark-brown transition-all px-8 rounded-full dark-brown">View More</button>
					</div>
				</div>
				<div className="flex flex-col items-center gap-5">
					<div>
						<img src={Pie} alt="Pie"/>
					</div>
					<div className="flex flex-col items-center gap-4">
						<h4 className="font-medium text-xl dark-brown">Pastry</h4>
						<button className="light-brown-bg py-2.5 hover:bg-dark-brown transition-all px-8 rounded-full dark-brown">View More</button>
					</div>
				</div>
			</div>
		</section>
	)
}
export default TeamCard