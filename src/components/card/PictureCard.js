import styled from 'styled-components';
import Gallery1 from "../../assets/images/Gallery1.svg"
import Gallery2 from "../../assets/images/Gallery2.svg"
import Gallery3 from "../../assets/images/Gallery3.svg"
import Gallery4 from "../../assets/images/Gallery4.svg"
import Gallery5 from "../../assets/images/Gallery5.svg"
import Gallery6 from "../../assets/images/Gallery6.svg"
import Gallery7 from "../../assets/images/Gallery7.svg"
import {useState} from "react";

const GalleryContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  //height: 500px; /* Adjust height as needed */
  position: relative;
`;

const Image = styled.img`
  margin-right: 20px;
	width: 7%;
	height: 616px;
	object-fit: cover;
	border-radius: 50px;
  cursor: pointer;
  transition:all 0.5s, margin-right 0.5s, filter 0.5s;

  &:last-child {
    margin-right: 0;
  }

  &.focused {
	  width: 42%;
	  border-radius: 50px;
    //transform: scale(1.2);
    margin-right: 10px;
      filter: brightness(1.1);
  }
`;

const images = [
	Gallery1,
	Gallery2,
	Gallery3,
	Gallery4,
	Gallery5,
	Gallery6,
	Gallery7
];
const PictureCard = () => {
	const [focusedIndex, setFocusedIndex] = useState(3);

	const handleClick = (index) => {
		setFocusedIndex(index);
	};
	return (
		<section className="w-9/12 flex mt-28 mx-auto">
			<GalleryContainer>
				{images.map((src, index) => (
					<Image
						key={index}
						src={src}
						alt={`Gallery Image ${index + 1}`}
						className={focusedIndex === index ? 'focused' : ''}
						onClick={() => handleClick(index)}
					/>
				))}
			</GalleryContainer>
		</section>
	)
}
export default PictureCard