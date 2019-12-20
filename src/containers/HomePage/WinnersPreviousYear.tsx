import React from "react";
import Swiper from "react-id-swiper";
import RequestCard from "../../components/RequestCard";
import { Winner } from "../../graphql";

const params = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  noSwiping: true,
  slidesPerView: 3,
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1
  }
};

const paramsMobile = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  centeredSlides: true,
  slidesPerView: 1
};

type propTypes = {
  winnersPreviousYear: Array<Winner>;
  onClick: (winner: Winner) => void;
};

export const WinnersPreviousYear: React.FC<propTypes> = ({
  winnersPreviousYear,
  onClick
}) => {
  return (
    <>
      <div style={{ padding: "20px 0" }} className="container-fluid">
        <h2 className="section_title">ПОБЕДИТЕЛИ ПРОШЛОГО ГОДА</h2>
        <div className="d-none d-md-block">
          <Swiper {...params}>
            {winnersPreviousYear!.map(winner => (
              <div
                key={winner.id}
                onClick={() => onClick(winner)}
                style={{ zIndex: "900" }}
              >
                <RequestCard
                  className="winner"
                  request={{
                    title: winner.request.address,
                    competition: winner.competition.name,
                    photos: winner.request.photos[0].url
                  }}
                />
              </div>
            ))}
          </Swiper>
        </div>
        <div className="d-block d-md-none">
          <Swiper {...paramsMobile}>
            {winnersPreviousYear!.map(winner => (
              <div key={winner.id} onClick={() => onClick(winner)}>
                <RequestCard
                  className="winner"
                  request={{
                    title: winner.request.address,
                    competition: winner.competition.name,
                    photos: winner.request.photos[0].url
                  }}
                />
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
