import React from 'react'

import {Box,Paper,styled} from '@material-ui/core'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin:theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Stacks = ({arr}) => {
  return (
   <Box  style={{display:'grid',placeItems:'center',height:'100vh' ,background:'red',position:'relative'}}>
      <div  style={{display:'flex',flexDirection:'column-reverse',height:'50vh' ,overflowY:'auto',position:'absolute',bottom:'10rem',}} >
{arr.map((e,idx)=>(
<Item key={idx}>{e}</Item>

))
     }     </div>
    </Box>
  )
}

export default Stacks


