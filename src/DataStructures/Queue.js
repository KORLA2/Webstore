import React from 'react'
import { Box, Paper, styled } from "@material-ui/core";
import {motion} from 'framer-motion'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  textAlign: "center",
  transition:'2s ease',
  color: theme.palette.text.secondary,
}));

const Queue = ({arr}) => {
  return (
    <Box
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        background: "red",
        position: "relative",
      }}
    >
 
    
        <div
          style={{
            display: "flex",
            width: "50vw",
            overflowY: "auto",
            position: "absolute",


            bottom: "10rem",
          }}
        >
          {arr.map((e, idx) => (
            <Item key={idx}>{e}</Item>
          ))}
        </div>

    </Box>
  );
}

export default Queue
