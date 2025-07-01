import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import styled from "@emotion/styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroContainer = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;
`;

const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
  width: 80%;
  max-width: 800px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const slides = [
  {
    image: "https://source.unsplash.com/random/1920x1080?nature",
    title: "Welcome to Our Website",
    description:
      "Discover amazing experiences and unforgettable moments with us.",
  },
  {
    image: "https://source.unsplash.com/random/1920x1080?architecture",
    title: "Explore Our Services",
    description: "Professional solutions tailored to your needs.",
  },
  {
    image: "https://source.unsplash.com/random/1920x1080?technology",
    title: "Innovation & Technology",
    description: "Leading the way with cutting-edge solutions.",
  },
];

const HeroCarousel = () => {
  return (
    <HeroContainer>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <HeroSlide>
              <HeroImage src={slide.image} alt={slide.title} />
              <HeroContent>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </HeroContent>
            </HeroSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroContainer>
  );
};

export default HeroCarousel;
