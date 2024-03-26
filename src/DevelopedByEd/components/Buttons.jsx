import { filter, genres } from "../states/features/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Tooltip } from "@chakra-ui/react";
import "@splidejs/react-splide/css";
import "./SplideStyle.css";

const Buttons = () => {
  const dispatch = useDispatch();

  const allGenres = useSelector(genres);

  const genreButons = allGenres.map((genre) => {
    return (
      <SplideSlide className="splide__slide" key={genre.id}>
        <Tooltip label={genre.name} aria-label="A tooltip">
          <button
            onClick={() => dispatch(filter(genre.id))}
            className="w-20 px-2 py-2 hover:border-black text-sm rounded-md text-white bg-black border border-solid shadow-sm transition-all duration-300 hover:cursor-pointer hover:outline-black hover:bg-white hover:text-black "
          >
            {genre.name.length > 5
              ? `${genre.name.substring(0, 5)}...`
              : genre.name}
          </button>
        </Tooltip>
      </SplideSlide>
    );
  });

  return (
    <div className="w-11/12 mt-10 flex items-center">
      <div className="w-2/12 m-auto flex items-center">
        <button
          onClick={() => dispatch(filter(0))}
          className=" py-2 px-3 text-sm text-white rounded-md bg-black border border-solid shadow-sm transition-all duration-300
        hover:cursor-pointer hover:text-black hover:border-black hover:outline-slate-600 hover:bg-white hover:outline-8"
        >
          ALL
        </button>
      </div>
      <div className="w-10/12 flex items-center">
        <Splide
          className="w-full"
          options={{
            arrows: false,
            pagination: false,
            drag: "free",
            perPage: 10,
            width: "90vw",
            breakpoints: {
              1300: {
                perPage: 5,
                width: "70vw",
              },

              1200: {
                perPage: 5,
                width: "70vw",
              },
              1096: {
                perPage: 5,
                width: "70vw",
              },
              768: {
                perPage: 3,
                width: "60vw",
              },
              576: {
                perPage: 3,
                width: "60vw",
              },
            },
          }}
        >
          {genreButons}
        </Splide>
      </div>
    </div>
  );
};

export default Buttons;
