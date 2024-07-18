import Logo from "../../assets/images/Logo.svg"
import ShoppingCart from "../../assets/images/shopping-cart.svg"
import Menu from "../../assets/images/dropmenu.svg"

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center px-9">
			<div>
				<img src={Logo} alt="Logo"/>
			</div>
			<div className="flex items-center gap-5">
				<ul className="flex gap-8 items-center">
					<li>
						<a href="#home" className="uppercase">Home</a>
					</li>
					<li>
						<a href="#coffee" className="uppercase">coffee</a>
					</li>
					<li>
						<a href="#menu" className="uppercase">Menu</a>
					</li>
					<li>
						<a href="#gallery" className="uppercase">gallery</a>
					</li>
					<li>
						<a href="#team" className="uppercase">team</a>
					</li>
				</ul>
				<div className="flex items-center gap-5">
					<a><img src={ShoppingCart} alt="Shopping Cart"/></a>
					<button><img src={Menu} alt="Menu Bar"/></button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar