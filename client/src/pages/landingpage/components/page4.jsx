import { Box, Typography, TextField, Button} from '@mui/material'
import React from 'react'






const page4 = () => {
  return (
    <Box
        pt={20}
        pl={20}
        height={"20vw"}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        pr={20}
    >
        <Typography
            variant='h2'
            sx={{color:"#004AAD", fontWeight:"700", textAlign:"center"}}
        >
            Join Ayush Portal Now!
        </Typography>
        <Typography
            variant='h5'
            sx={{color:"black", fontWeight:"500", textAlign:"center"}}
        >
            Sign up and start connecting with investors.
        </Typography>
        

            <Button
                textAlign = "center"
                variant='contained'
                sx={{width:"20%", height:"3vw", marginTop:"3vw"}}
            >Sign Up</Button>

    </Box>
      
  )
}

export default page4
