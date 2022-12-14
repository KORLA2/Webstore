import { makeStyles } from "@material-ui/core";
export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  btngrp: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  typo: {
    textAlign: "center",
  },
  column: {
    display: "flex",
    flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    width:'100%',
    overflowX:'hidden',
    padding:'2rem'
  },
  card:{
padding:'2rem'
  }
}));