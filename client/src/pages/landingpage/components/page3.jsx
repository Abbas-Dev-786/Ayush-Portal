import { Box, Typography} from '@mui/material'
import React from 'react'

const page3 = () => {
  return (
    <Box>
        <Typography
            variant='h2'
            sx={{color:"#004AAD", fontWeight:"700", textAlign:"center"}}
        >
            How to Invest In a Start-up?
        </Typography>
        <Box
            className="page3background"
            height="35vw"
            width="100%"
        >
            <Box
                component="img"
                src='./images/Images/page3bg.png'
                height="35vw"
                width="100%"
                sx={{position:"absolute", zIndex:"-1"}}
            ></Box>

            <Box
                p={10}
                pl={20}
                display={'flex'}
                alignItems={'center'}
                gap={2}
                flexWrap={'wrap'}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    height="30vw"
                    width="19vw"
                    className="card2"
                >
                    <Box
                        component="img"
                        src='./images/Images/card21.png'
                        height="65%"
                        width="100%"
                    ></Box>
                    <Box
                        className="card2btn"    
                    >
                        <Typography
                            variant='h5'
                            sx={{color:'#072853', fontWeight:"600"}}
                        >
                            Register Yourself
                        </Typography>
                    </Box>
                </Box>

                <Box
                    component="img"
                    src='./images/Images/cardarrow.png'
                    height="7.5vw"
                ></Box>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    height="30vw"
                    width="20vw"
                    className="card2"
                >
                    <Box
                        component="img"
                        src='./images/Images/card22.png'
                        height="65%"
                        width="100%"
                    ></Box>
                    <Box
                        className="card2btn"    
                    >
                        <Typography
                            variant='h5'
                            sx={{color:'#072853', fontWeight:"600"}}
                        >
                            Connect
                        </Typography>
                    </Box>
                </Box>

                <Box
                    component="img"
                    src='./images/Images/cardarrow.png'
                    height="7.5vw"
                ></Box>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    height="30vw"
                    width="20vw"
                    className="card2"
                >
                    <Box
                        component="img"
                        src='./images/Images/card23.png'
                        height="65%"
                        width="100%"
                    ></Box>
                    <Box
                        className="card2btn"    
                    >
                        <Typography
                            variant='h5'
                            sx={{color:'#072853', fontWeight:"600"}}
                        >
                            Invest
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default page3
