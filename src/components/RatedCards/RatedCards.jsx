import React from "react";
import { Typography, Box } from "@mui/material";

import { MovieList } from "..";
import useStyles from "./styles";

const RatedCards = ({ title, data }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h5" style={{ marginBottom: "1rem" }}>
        {title}
      </Typography>
      <MovieList movies={data} />
      {/* <Grid
        container
        display="flex"
        flexWrap="wrap"
        className={classes.container}
      >
        {data?.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
      </Grid> */}
    </Box>
  );
};

export default RatedCards;
