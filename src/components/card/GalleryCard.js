import Cup from "../../assets/images/cup-2.svg"
import Person1 from "../../assets/images/person1.svg"
import Person2 from "../../assets/images/person2.svg"
import Person3 from "../../assets/images/person3.svg"
import Right from "../../assets/images/circle-right.svg"
import Left from "../../assets/images/circle-left.svg"
const GalleryCard = () => {
	return (
		<section id="gallery" className="mx-auto mt-36 flex">
			<div className="w-1/6">
				<img src={Cup} alt="Ice cream cup"/>
			</div>
			<div className="bean-background w-5/6 flex gap-2.5">
				<div className="flex flex-col gap-3.5 w-1/4">
					<div className="flex flex-col gap-3.5">
						<h4 className="dark-brown font-medium text-3xl">What our Customer are saying</h4>
						<p className="dark-blue text-sm">Figma ipsum component variant main layer. Layout selection group blur
							arrow flows undo figma style. Star shadow flatten export select text pen.</p>
					</div>
					<div className="flex gap-3.5">
						<button><img src={Left} alt="Left Button"/></button>
						<button><img src={Right} alt="Right Button"/></button>
					</div>
				</div>
				<div className="flex gap-8 w-3/4">
					<div className="light-brown-bg h-max px-5 rounded-2xl py-7 flex flex-col items-center gap-3.5">
						<div>
							<img src={Person1} alt="Person 1"/>
						</div>
						<div className="flex flex-col items-center gap-3.5">
							<h4 className="dark-brown text-xl">David Gale</h4>
							<p className="text-center text-sm">Figma ipsum component variant main layer. Font hand device scale flows underline boolean
								vector.Figma ipsum component variant main layer. Font hand device scale flows underline
								boolean vector.</p>
						</div>
					</div>
					<div className="light-brown-bg h-max px-5 rounded-2xl py-7 m--60 flex flex-col items-center gap-3.5">
						<div>
							<img src={Person2} alt="Person 1"/>
						</div>
						<div className="flex flex-col items-center gap-3.5">
							<h4 className="dark-brown text-xl">David Gale</h4>
							<p className="text-center text-sm">Figma ipsum component variant main layer. Font hand device scale flows underline boolean
								vector.Figma ipsum component variant main layer. Font hand device scale flows underline
								boolean vector.</p>
						</div>
					</div>
					<div className="light-brown-bg h-max px-5 rounded-2xl py-7 mt-10 flex flex-col items-center gap-3.5">
						<div>
							<img src={Person3} alt="Person 1"/>
						</div>
						<div className="flex flex-col items-center gap-3.5">
							<h4 className="dark-brown text-xl">David Gale</h4>
							<p className="text-center text-sm">Figma ipsum component variant main layer. Font hand device scale flows underline boolean
								vector.Figma ipsum component variant main layer. Font hand device scale flows underline
								boolean vector.</p>
						</div>
					</div>
					<div className="light-brown-bg rounded-s-2xl w-2/6 h-430"></div>
				</div>
			</div>

		</section>
	)
}
export default GalleryCard