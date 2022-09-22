import React from 'react'
import {
  styled,
  Grid,
  Paper,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Typography,
  Button,
  CardContent,
} from "@material-ui/core";
import usestyles from './styles'
const Products = ({product,addcart}) => {
    let classes=usestyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia className={classes.media} image={product.image.url} />
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>

          <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="text.secondary"/>

        </div>

        <Typography variant="body2" color="text.secondary">
          {product.price.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={()=>

          addcart(product.id,1)

        }>
          Add to Cart
          </Button>
      </CardActions>
    </Card>
  );
}

export default Products
