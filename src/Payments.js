import React from 'react'
import {Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button} from '@material-ui/core'
import useStyles from './styles.js'
const Payments = () => {
let steps=['Shipping Address','Complete Payment']
let classes=useStyles();
  return (
    <div className={classes.layout}>
      <Paper>
        <Typography variant='h5' className={classes.typo}>Payment Section </Typography>

        <Stepper>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>
    </div>
  );
}

export default Payments
