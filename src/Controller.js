import React from 'react'
import { TextField,Grid } from '@material-ui/core'
import {Controller, useFormContext} from 'react-hook-form'
const Control = ({label,name}) => {
let  control=useFormContext()

  return (


<Grid item xs={12}  sm={6}>
<TextField required  label={label} name={name} />
</Grid>
  )
}

export default Control