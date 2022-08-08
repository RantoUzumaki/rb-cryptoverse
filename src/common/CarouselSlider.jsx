import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";

import image1 from "../assets/slider_images/WallpaperDog-20530250.jpg";
import image2 from "../assets/slider_images/WallpaperDog-20530251.jpg";
import image3 from "../assets/slider_images/WallpaperDog-20530255.jpg";
import image4 from "../assets/slider_images/WallpaperDog-20530263.jpg";

const CarouselSlider = () => {
	const SliderConfig = () => ({
		showArrows: true,
		showStatus: false,
		showIndicators: true,
		infiniteLoop: true,
		showThumbs: false,
		useKeyboardArrows: true,
		autoPlay: true,
		stopOnHover: true,
		swipeable: false,
		dynamicHeight: false,
		emulateTouch: false,
		autoFocus: false,
		interval: 5000,
		transitionTime: 1000,
		swipeScrollTolerance: 5,
		animationHandler: "fade",
	});

	const arrowStyles = {
		position: "absolute",
		zIndex: 2,
		top: "calc(50% - 15px)",
		cursor: "pointer",
		padding: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 0,
		background: "var(--black)",
		color: "var(--green)",
		fontSize: 32,
		borderRadius: "100%",
		border: "1px solid var(--green)"
	};

	return (
		<Carousel
			{...SliderConfig()}
			renderArrowNext={(onClickHandler, hasNext) =>
				hasNext && (
					<button
						onClick={onClickHandler}
						style={{ ...arrowStyles, right: 15 }}
					>
						<TiChevronRight />
					</button>
				)
			}
			renderArrowPrev={(onClickHandler, hasPrev) =>
				hasPrev && (
					<button
						onClick={onClickHandler}
						style={{ ...arrowStyles, left: 15 }}
					>
						<TiChevronLeft />
					</button>
				)
			}
		>
			<img src={image1} alt="image1" />
			<img src={image2} alt="image2" />
			<img src={image3} alt="image3" />
			<img src={image4} alt="image4" />
		</Carousel>
	);
};

export default CarouselSlider;
