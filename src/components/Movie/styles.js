import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  links: {
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    borderRadius: "15px",
    aspectRatio: 0.7,
    marginBottom: "10px",
    width: "95%",
    objectFit: "cover",
    transition: "all .1s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "110%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: 0,
    textAlign: "center",
    padding: "0 10px",
  },
}));
