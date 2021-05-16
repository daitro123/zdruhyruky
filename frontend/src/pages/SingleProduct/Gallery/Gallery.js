import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination, Thumbs } from "swiper/core";
import "./Gallery.scss";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Mousewheel, Pagination, Thumbs]);

const Gallery = ({ predmet }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="Gallery">
			<Swiper
				direction={"vertical"}
				onSwiper={setThumbsSwiper}
				allowTouchMove={false}
				spaceBetween={10}
				slidesPerView={6}
				height={"60rem"}
				style={{ marginRight: "2rem" }}
			>
				{predmet.images.map((image, index) => {
					return (
						<SwiperSlide
							key={`thumb-${index}`}
							style={{ height: "6rem", width: "4rem" }}
						>
							<img src={image} />
						</SwiperSlide>
					);
				})}
			</Swiper>
			<Swiper
				direction={"vertical"}
				slidesPerView={1}
				thumbs={{ swiper: thumbsSwiper }}
				spaceBetween={0}
				mousewheel={true}
				pagination={{
					clickable: true,
				}}
				speed={800}
				className="mySwiper"
				style={{ height: "60rem", width: "40rem", marginLeft: 0, marginRight: 0 }}
			>
				{predmet.images.map((image, index) => {
					return (
						<SwiperSlide
							key={`slide-${index}`}
							style={{ height: "100%", width: "100%" }}
						>
							<img src={image} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Gallery;
