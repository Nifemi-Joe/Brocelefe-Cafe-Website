import Navbar from "../components/nav/Navbar";
import HomeCard from "../components/card/HomeCard";
import CoffeeCard from "../components/card/CoffeeCard";
import MenuCard from "../components/card/MenuCard";
import GalleryCard from "../components/card/GalleryCard";
import TeamCard from "../components/card/TeamCard";
import ContactCard from "../components/card/ContactCard";
import PictureCard from "../components/card/PictureCard";
import SubscribeCard from "../components/card/SubscribeCard";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
	return (
		<div>
			<Navbar/>
			<HomeCard/>
			<CoffeeCard/>
			<MenuCard/>
			<GalleryCard/>
			<TeamCard/>
			<ContactCard/>
			<PictureCard/>
			<SubscribeCard/>
			<Footer/>
		</div>
	)
}
export default LandingPage