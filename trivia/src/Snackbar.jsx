import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react';
import { useEffect } from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function FeedbackSnackbar({answer, opened, setShowSnackbar}) {

const [message, setMessage] = useState("")
const [severity, setSeverity] = useState("")

useEffect(() => {
      if (answer) {
        setMessage("Correct!" )
        setSeverity('success')
    } else {
        setMessage("Incorrect!")  
        setSeverity('error')
    }
}, [answer])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar 
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={opened} 
        autoHideDuration={1000} 
        onClose={handleClose}
        key={{vertical:'top' }+ {horizontal:"center"}}
        >
        <Alert severity={severity} variant="filled" onClose={handleClose} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}