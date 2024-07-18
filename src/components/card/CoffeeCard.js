import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Coffee from "../../assets/images/coffee.svg"
import ArrowRight from "../../assets/images/arrow-right.svg"
import ArrowLeft from "../../assets/images/arrow left.svg"
// import './CarouselComponent.css'; // Create and import custom styles
import Header from "../../assets/images/coffee-heeader.svg"
const CoffeeCard = () => {
	const coffeeList = [
		{ name: 'Iced Cappuccino', image: Coffee, description: 'Add To Order +', color: "#A5A58D" },
		{ name: 'Raspberry Cappuccino', image: Coffee, description: 'Add To Order +', color: "#B7B7A4" },
		{ name: 'Caramel Macchiato', image: Coffee, description: 'Add To Order +', color: "#6B705C" },
		// Add more items as needed
	];
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		centerMode: false,
		centerPadding: '0',
		nextArrow: <img src={ArrowRight} alt="Arrow Right" width={72} height={72}/>,
		prevArrow: <img src={ArrowLeft} alt="Arrow Left" width={72} height={72}/>,
	};

	return (
		<section id="coffee">
			<div className="w-4/5 mx-auto middle-brown-bg rounded-50 m-250">
				<div className="carousel-container">
					<Slider {...settings}>
						{coffeeList.map((coffee, index) => (
							<div key={index} className="coffee-item">
								<div style={{backgroundColor: coffee.color, borderRadius: '50%', backgroundSize: '50%', width: 'fit-content', height: '200px', display: 'flex'}}>
									<img src={coffee.image} alt={coffee.name} className="coffee-image"/>
								</div>
								<h3 className="coffee-name">{coffee.name}</h3>
								<p className="coffee-description">{coffee.description}</p>
							</div>
						))}
					</Slider>
				</div>
			</div>
			<div className="mt-24 w-9/12 mx-auto flex flex-col gap-8">
				<div>
					<img src={Header} alt="Coffee Background"/>
				</div>
				<div className="flex w-11/12 gap-2 mx-auto justify-between">
					<div className="flex flex-col items-center gap-2">
						<h6 className="font-medium text-2xl dark-brown capitalize">Roasting</h6>
						<p className="dark-blue text-center">Lorem ipsum dolor sit amet, his convenire similiqu.</p>
					</div>
					<div className="flex flex-col items-center gap-2">
						<h6 className="font-medium text-2xl dark-brown capitalize">grinding</h6>
						<p className="dark-blue text-center">Lorem ipsum dolor sit amet, his convenire similiqu.</p>
					</div>
					<div className="flex flex-col items-center gap-2">
						<h6 className="font-medium text-2xl dark-brown capitalize">brewing</h6>
						<p className="dark-blue text-center">Lorem ipsum dolor sit amet, his convenire similiqu.</p>
					</div>
					<div className="flex flex-col items-center gap-2">
						<h6 className="font-medium text-2xl dark-brown capitalize">Presentation</h6>
						<p className="dark-blue text-center">Lorem ipsum dolor sit amet, his convenire similiqu.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default CoffeeCard