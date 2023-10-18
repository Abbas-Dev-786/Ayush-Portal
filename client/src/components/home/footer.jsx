import React from 'react'
import { Box, Typography, Button, TextField } from '@mui/material'


const footer = () => {
  return (
    <Box
        className = "footer"
        width={"90%"}
        display={'flex'}
        justifyContent={'space-between'}
        p={5}
        pl={10}
        pr={10}
        sx={{backgroundColor:"#292929", color:"white"}}

    >
        <Box>
            <Box
                component={"img"}
                height={"4vw"}
                src='./images/Images/Logo.svg'
                sx={{borderRadius:"5px"}}
                mb={5}
            ></Box>
            <Typography
                sx={{fontWeight:"600", fontSize:"1rem"}}
                mb={2.5}
                ml={1}
            >
                Useful Links -
            </Typography>
        
            <Box
                 sx={{fontSize:"0.9rem"}}  
                 ml={4}
                 mb={2.5}
            >
            <ul
               
                >
                        <li><a href="">Login</a></li>
                        <li><a href="">Sign up</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
            </ul>
            </Box>
        <Typography
            sx={{fontSize:"0.6rem"}}
            lineHeight={0.5}
            ml={1}
        >Feedback</Typography>
        <Typography
            sx={{fontSize:"0.6rem"}}
            ml={1}
        >Copyright Ministery of Ayush. All Rights Reserved </Typography>
        <Typography
            sx={{fontSize:"0.7rem", fontWeight:"700"}}
            ml={1}
        >Last Updated: Tue Sep 26 2023</Typography>
        </Box>

        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
        >
            <Box
                display={'flex'}
            >
                <TextField
                variant='outlined'
                placeholder='Enter Your Email'
                pt={"0"}
                sx={{backgroundColor:"white", borderRadius:"10px", width:"30vw"}}
                ></TextField>
                <Button
                    variant='contained'
                    sx={{marginLeft:'1vw', borderRadius:"10px", width:"10vw", backgroundColor:"#F79820",fontWeight:"600"}}
                >SUBSCRIBE</Button>
            </Box>
            <Box
                mt={13}
            >
                <Typography

                    sx={{fontWeight:"100", fontSize:"2vw"}}
                >
                    Get Social
                </Typography>
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    width={"30%"}
                    mt={3}
                >
                    <Box
                        component={"img"}
                        src='./images/Images/ni1.png'
                        width={"1vw"}
                        
                    ></Box>
                    <Box
                        component={"img"}
                        src='./images/Images/ni2.png'
                        width={"2.6vw"}
                        ml={3}
                    ></Box>
                    <Box
                        component={"img"}
                        src='./images/Images/ni3.png'
                        width={"2.3vw"}
                        ml={3}
                    ></Box>
                </Box>
            </Box>
        </Box>

        <Box>
            <Box
                sx={{backgroundColor:"#E7E8FF", borderRadius:"5px"}}
                display={'flex'}
                p={0.5}
                justifyContent={'center'}
            >
                <Typography
                    fontWeight={800}
                    letterSpacing={1}
                    fontSize={25}
                    sx={{color:"#032068"}}
                >
                    FEEDBACK
                </Typography>
                
               
            </Box>
            <Box
                    sx={{fontSize:"1.5rem"}}  
                    mb={2.5}
                    ml={5}
                    mt={3}
                >
                    <ul
                        className='ul'
                        >
                            <li><a href="">Event Calendar</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Website Policies</a></li>
                            <li><a href="">Help</a></li>
                            <li><a href="">Site Map</a></li>
                    </ul>
                </Box>
        </Box>
    </Box>
  )
}

export default footer
