import React from 'react'
import {Badge, Card,IconButton} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import  {NavLink} from 'react-router-dom'


const Navbar = ({total}) => {

  return (

 <Card style={{ marginBottom:'2rem' ,display:'flex', alignItems:'center',justifyContent:'space-between'}}>

NILE
    <IconButton area-label="show cart items" color='inherit' >
    <NavLink to='/MyCart'>
<Badge badgeContent={total} color='secondary'>

    <ShoppingCart/>
</Badge>
    </NavLink>
    </IconButton>
 </Card>
  )
}

export default Navbar