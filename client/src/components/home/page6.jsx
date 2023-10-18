import React from 'react'
import { Box, Typography } from '@mui/material'

const page6 = () => {
  return (
    <Box
        display={'flex'}
        flexDirection={'column'}
        width="67%"
        m={11}
        p={10}
        pl={20}
        pr={20}
        sx={{border:"1px solid black", borderRadius:"25px"}}
    >
        <Typography
            variant='h3'
            textAlign={'center'}
            lineHeight={1.5}
            ml={10}
            mr={10}
            sx={{color:"#F79820", fontWeight:"700"}}
        >
            Platform for startup investing
            Trusted by founders & investors.
        </Typography>
        <Box
            mt={16}
            pl={5}
            width={"100%"}
            display={'flex'}
            gap={10}
        >
            <Box
                sx={{backgroundColor:"#eceeed", borderRadius:"2rem"}}
                height={"7vw"}
                p={2}
                width={"9vw"}
            >
                <Box 
                    component="img"
                    src='./images/Images/i1.png'
                    width="4vw"
                    sx={{position:"relative", top:"-3.5vw"}}
                ></Box>
                <Typography
                    variant='h4'
                    mt={-7}
                    sx={{color:"#F79820", fontWeight:"700"}}
                >
                    89+
                </Typography>
                <Typography
                    variant='h6'
                    lineHeight={1}
                    fontWeight={600}
                    sx={{width:"1vw", color:"#032068"}}
                >
                    Investments 
                    Made
                </Typography>
            </Box>

            <Box
                sx={{backgroundColor:"#eceeed", borderRadius:"2rem"}}
                height={"7vw"}
                p={2}
                width={"9vw"}
            >
                <Box 
                    component="img"
                    src='./images/Images/i2.png'
                    width="4.5vw"
                    sx={{position:"relative", top:"-3.5vw"}}
                ></Box>
                <Typography
                    variant='h4'
                    mt={-7}
                    sx={{color:"#F79820", fontWeight:"700"}}
                >
                    1.5+ Cr
                </Typography>
                <Typography
                    variant='h6'
                    lineHeight={1}
                    fontWeight={600}
                    sx={{width:"1vw", color:"#032068"}}
                >
                    Funds raised
                </Typography>
            </Box>

            <Box
                sx={{backgroundColor:"#eceeed", borderRadius:"2rem"}}
                height={"7vw"}
                p={2}
                width={"9vw"}
            >
                <Box 
                    component="img"
                    src='./images/Images/i3.png'
                    width="2.5vw"
                    ml={2}
                    sx={{position:"relative", top:"-3.5vw"}}
                ></Box>
                <Typography
                    variant='h4'
                    mt={-7}
                    sx={{color:"#F79820", fontWeight:"700"}}
                >
                    2956
                </Typography>
                <Typography
                    variant='h6'
                    lineHeight={1}
                    fontWeight={600}
                    sx={{width:"1vw", color:"#032068"}}
                >
                    Startups Registered
                </Typography>
            </Box>

            <Box
                sx={{backgroundColor:"#eceeed", borderRadius:"2rem"}}
                height={"7vw"}
                p={2}
                width={"9vw"}
            >
                <Box 
                    component="img"
                    src='./images/Images/i4.png'
                    width="4.25vw"
                    sx={{position:"relative", top:"-3.5vw"}}
                ></Box>
                <Typography
                    variant='h4'
                    mt={-7}
                    sx={{color:"#F79820", fontWeight:"700"}}
                >
                    5698
                </Typography>
                <Typography
                    variant='h6'
                    lineHeight={1}
                    fontWeight={600}
                    sx={{width:"10vw", color:"#032068"}}
                >
                    Investors on platform
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default page6
