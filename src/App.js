import React from 'react'
import Products from './Products'
import {styled ,Grid,Paper,Box,Card,CardActionArea,CardMedia,CardActions,Typography,Button,CardContent} from '@material-ui/core'
import Navbar from './Navbar'
import usestyles from './styles'
const App = () => {
    let classes=usestyles();
  return (
    <div>
      <Navbar />
      <Box>
        <Grid container justify="center" spacing={4}>
          {Products.map((e, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia className={classes.media} />
                  <CardContent className={classes.cardContent}>
                <div >

                    <Typography gutterBottom variant="h5" component="div">
                      {e.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {e.desc}
                    </Typography>
                </div>

                    <Typography variant="body2" color="text.secondary">
                      {e.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App



