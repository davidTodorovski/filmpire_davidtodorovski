import { useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import { ColorModeContext } from "../utils/ToggleColorMode";
import { fetchToken } from "../utils/index";
import { useNavigate } from "react-router-dom";
import {
  selectGenreOrCategory,
  searchMovie,
} from "../features/currentGenreOrCategory";
import { useDispatch } from "react-redux";

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: "de1df44aeb7c69f731f397b5acf331bd2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
          );

          console.log(foundGenre, "here");
          if (foundGenre) {
            dispatch(selectGenreOrCategory(foundGenre.id));
            navigate("/");
          } else {
            const category = genreOrCategory.replace(" ", "_");
            dispatch(selectGenreOrCategory(category));
            navigate("/");
          }
        } else if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();

          window.location.href = "/";
        } else if (command === "search") {
          dispatch(searchMovie(query));
          navigate("/");
        }
      },
    });
  }, []);

  return <div>Alan</div>;
};

export default useAlan;
