import React from 'react'
import {styled,Grid,Paper,Box} from '@material-ui/core'
import styles from 'styled-components'
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Main = () => {
  return (
    <Center>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={6}>
            <Item
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
              }}
            >
              Data Structures
              <Link to="/LinkedList">LinkedList</Link>
              <Link to="/Stack">Stack</Link>
              <Link to="/Queue">Queue</Link>
              <Link to="/BinarySearchTree">BinarySearchTree</Link>
              <Link to="/AvlTree">AvlTree</Link>
              <Link to="/Graph">Graph</Link>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
              }}
            >
              Algorithms
              <Link to="/BFS">BFS </Link>
              <Link to="/DFS">DFS</Link>
              <Link to="/Sorting">Sorting</Link>
              <Link to="/Dijkstra">Dijkstra</Link>
              <Link to="/Graph">Waiting</Link>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Center>
  );
}

export default Main

let Center=styles.div`
background:red;
height:100vh;
width:100vw;

display:grid;
place-items:center;
`
