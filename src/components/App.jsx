import React, { useRef } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { Actors, MovieInformation, Navbar, Movies, Profile } from "./index";

import useStyles from "./styles";
import useAlan from "./Alan";

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Routes>
          <Route path={"/"} element={<Movies />} />
          <Route path={"/approved/*"} element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
