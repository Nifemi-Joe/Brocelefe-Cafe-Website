import CoffeeCup from "../../assets/images/coffee-cup.svg"
import Bean from "../../assets/images/bean.svg"
import Sugar from "../../assets/images/sugar.svg"
import Classic from "../../assets/images/classic.svg"
const HomeCard = () => {
	return (
		<section id="home" className="flex w-10/12 mx-auto relative mt-20 justify-between mb-20">
			<div className="flex flex-col w-5/12">
				<div className="flex flex-col">
					<h2 className="capitalize dark-brown text-6xl font-black leading-72">
						mindful drinks
						for calm
					</h2>
					<p className="mt-4 dark-blue w-10/12 text-base">Figma ipsum component variant main layer. Figma ipsum component variant main layer. Figma ipsum component variant main layer.</p>
					<button className="flex w-2/5 items-center duration-300 hover:bg-dark-brown transition-all bg-icon-dark pl-10 pr-1 font-bold text-lg mt-5 gap-4 rounded-full light-brown-bg h-14 text-center">BUY NOW</button>
				</div>
			</div>
			<div className="flex flex-col gap-5 w-3/12">
				<div className="flex w-full gap-2.5">
					<div className="w-1/5">
						<img src={Bean} alt="Bean" width={68} height={68}/>
					</div>
					<div className="flex flex-col gap-1 w-4/5">
						<h6 className="dark-brown font-semibold">100% Premium</h6>
						<p className="capitalize text-base dark-blue">Skinny latte using
							100% premium arabic beans</p>
					</div>
				</div>
				<div className="flex w-full gap-2.5">
					<div className="w-1/5">
						<img src={Sugar} alt="Sugar" width={68} height={68}/>
					</div>
					<div className="flex flex-col gap-1 w-4/5">
						<h6 className="dark-brown font-semibold">Sugar free</h6>
						<p className="capitalize text-base dark-blue">now without added sugar</p>
					</div>
				</div>
				<div className="flex w-full gap-2.5">
					<div className="w-1/5">
						<img src={Bean} alt="Bean" width={68} height={68}/>
					</div>
					<div className="flex flex-col gap-1 w-4/5">
						<h6 className="dark-brown font-semibold text-lg">Chilled Classics</h6>
						<p className="capitalize text-base dark-blue">compliments redmud
							cherry coffee</p>
					</div>
				</div>
			</div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
				<img src={CoffeeCup} alt="Coffee Cup"/>
			</div>
		</section>
	)
}
export default HomeCard