import Cup from "../../assets/images/cup-1.svg"
import Beans from "../../assets/images/beans-3.svg"
import Pastry from "../../assets/images/bread.svg"
import Cup2 from "../../assets/images/cup.svg"
import Group1 from "../../assets/images/group-1.svg"
import Group2 from "../../assets/images/group-2.svg"
import Group3 from "../../assets/images/group-3.svg"
import Group4 from "../../assets/images/group-4.svg"

const MenuCard = () => {
	return (
		<section id="menu" className="w-9/12 mx-auto mt-24 flex flex-col items-center gap-16">
			<div className="flex flex-col items-center gap-8">
				<div className="flex flex-col items-center gap-3.5">
					<h4 className="font-semibold text-center dark-brown text-3xl">Coffee Variety’s</h4>
					<p className="text-center dark-blue w-3/5">Figma ipsum component variant main layer. Rotate style prototype arrange fill horizontal connection.</p>
				</div>
				<div className="flex items-baseline gap-8">
					<div className="flex flex-col items-center gap-3.5">
						<div>
							<img src={Cup} alt="Cup"/>
						</div>
						<div className="flex flex-col items-center gap-2.5">
							<h4 className="font-medium text-center dark-brown text-xl">Beans</h4>
							<p className="text-center dark-blue">Figma ipsum component variant main layer. Rotate
								style prototype arrange fill horizontal connection.</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-3.5">
						<div>
							<img src={Beans} alt="Beans"/>
						</div>
						<div className="flex flex-col items-center gap-2.5">
							<h4 className="font-medium text-center dark-brown text-xl">Beans</h4>
							<p className="text-center dark-blue">Figma ipsum component variant main layer. Rotate
								style prototype arrange fill horizontal connection.</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-3.5">
						<div>
							<img src={Pastry} alt="Pastry"/>
						</div>
						<div className="flex flex-col items-center gap-2.5">
							<h4 className="font-medium text-center dark-brown text-xl">Pastry</h4>
							<p className="text-center dark-blue">Figma ipsum component variant main layer. Rotate
								style prototype arrange fill horizontal connection.</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-3.5">
						<div>
							<img src={Cup2} alt="Cup2"/>
						</div>
						<div className="flex flex-col items-center gap-2.5">
							<h4 className="font-medium text-center dark-brown text-xl">Take Away</h4>
							<p className="text-center dark-blue">Figma ipsum component variant main layer. Rotate
								style prototype arrange fill horizontal connection.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4">
				<div>
					<img src={Group1} alt="Group 1"/>
				</div>
				<div className="flex flex-col items-center gap-2.5 light-brown-bg justify-center">
					<h4 className="font-medium text-center dark-brown text-xl">RESERVATIONS</h4>
					<div>
						<p className="text-center dark-blue">Reservation numbers:</p>
						<p className="text-center dark-blue">+458-874-36-21</p>
						<p className="text-center dark-blue">+458-471-56-36</p>
					</div>
				</div>
				<div>
					<img src={Group2} alt="Group 2"/>
				</div>
				<div className="flex flex-col items-center gap-2.5 light-brown-bg justify-center rounded-se-3xl">
					<h4 className="font-medium text-center dark-brown text-xl">RESERVATIONS</h4>
					<div>
						<p className="text-center dark-blue">Reservation numbers:</p>
						<p className="text-center dark-blue">+458-874-36-21</p>
						<p className="text-center dark-blue">+458-471-56-36</p>
					</div>
				</div>
				<div className="flex flex-col items-center gap-2.5 light-brown-bg justify-center rounded-es-3xl">
					<h4 className="font-medium text-center dark-brown text-xl">RESERVATIONS</h4>
					<div>
						<p className="text-center dark-blue">Reservation numbers:</p>
						<p className="text-center dark-blue">+458-874-36-21</p>
						<p className="text-center dark-blue">+458-471-56-36</p>
					</div>
				</div>
				<div>
					<img src={Group3} alt="Group 3"/>
				</div>
				<div className="flex flex-col items-center gap-2.5 light-brown-bg justify-center">
					<h4 className="font-medium text-center dark-brown text-xl">RESERVATIONS</h4>
					<div>
						<p className="text-center dark-blue">Reservation numbers:</p>
						<p className="text-center dark-blue">+458-874-36-21</p>
						<p className="text-center dark-blue">+458-471-56-36</p>
					</div>
				</div>
				<div>
					<img src={Group4} alt="Group 3"/>
				</div>
			</div>
		</section>
	)
}
export default MenuCard