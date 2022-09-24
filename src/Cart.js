import React from 'react'
import {Grid,Card,CardActionArea,ButtonGroup,CardActions,Button,CardContent,CardMedia,Typography} from '@material-ui/core'
import  usestyles from './styles.js'
import {Link} from 'react-router-dom'
const Cart = ({cart,updatecart,removecart}) => {
  console.log(cart)
let classes=usestyles()
  return (
    <Card>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        className={classes.typo}
      >
        MY Cart
      </Typography>
      <CardContent className={classes.cardContent}>
        <Button
          component={Link}
          to="/payment"
          size="small"
          variant="outlined"
          color="secondary"
        >
          Continue to buy 1 items
        </Button>

        <Button
          component={Link}
          to="/payment"
          size="small"
          variant="outlined"
          color="secondary"
        >
          Continue to Buy all items
        </Button>
      </CardContent>
      <Grid container justify="center" spacing={4}>
        {cart.line_items &&
          cart.line_items.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={product.image.url}
                  />
                </CardActionArea>
                <CardContent className={classes.cardContent}>
                  <div>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>

                    <Typography
                      dangerouslySetInnerHTML={{ __html: product.description }}
                      variant="body2"
                      color="text.secondary"
                    />
                  </div>

                  <Typography variant="body2" color="text.secondary">
                    {product.price.formatted_with_symbol}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardContent}>
                  <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                    className={classes.btngrp}
                  >
                    <Button
                      onClick={() => {
                        updatecart(product.id, product.quantity + 1);
                      }}
                    >
                      +
                    </Button>
                    <Typography variant="body2" color="text.secondary">
                      {product.quantity}
                    </Typography>
                    <Button
                      onClick={() => {
                        updatecart(product.id, product.quantity - 1);
                      }}
                    >
                      -
                    </Button>
                  </ButtonGroup>

                  <Button
                    size="small"
                    color="secondary"
                    variant="outlined"
                    onClick={() => {
                      removecart(product.id);
                    }}
                  >
                    Remove From Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Card>
  );
}

export default Cart
