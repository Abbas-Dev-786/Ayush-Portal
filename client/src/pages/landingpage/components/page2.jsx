import React from 'react'
import { Box, Button } from '@mui/material'

const page2 = () => {
  return (
    <Box>
        <Box className='design1'
          component="img"
          src='./images/Images/design1.png'
          sx={{height:"7vw"}}
        ></Box>
        <Box>
        <Box 
          height="40vw">
          <Box 
            component="img"
            src='./images/Images/explore.png'
            mt="5vw"
            ml="9vw"
            width="80%"
            borderRadius="15px"
          >
            
          </Box>
          <Button className='explore' variant='contained'
            sx={{ color: '#008768', backgroundColor: 'white', borderColor: 'white', textTransform:"capitalize", height:"3.3vw", width:"10vw", fontWeight:"700"}}
            
          >Explore Startups</Button>
        
        </Box>
        <Box className="cards"
          display={"flex"}
          flexWrap={'wrap'}
          justifyContent={'space-evenly'}
          alignContent={'space-between'}
          height="30vw"
          p="1vw 7vw"
          pr="8vw"
          gap="1vw"
        >
            <Box className="card"
              display={"flex"}
              flexDirection={"column"}
            >
              <Box
                component="img"
                src='./images/Images/card1.png'
                sx={{
                  height:"14.5vw",
                  width:"24vw"
                }}
                mb={-8}
              >
              </Box>
              <Box
                component="img"
                className="cardbtn"
                src='./images/Images/cardbtn.png'
                sx={{
                  width:"20vw"
                }}
                ml={5}
              ></Box>
            </Box>
            <Box className="card"
              display={"flex"}
              flexDirection={"column"}
            >
              <Box
                component="img"
                src='./images/Images/card2.png'
                sx={{
                  height:"14.5vw",
                  width:"24vw"
                }}
                mb={-8}
              >
              </Box>
              <Box
                component="img"
                className="cardbtn"
                src='./images/Images/cardbtn.png'
                sx={{
                  width:"20vw"
                }}
                ml={5}
              ></Box>
            </Box>
            <Box className="card"
              display={"flex"}
              flexDirection={"column"}
            >
              <Box
                component="img"
                src='./images/Images/card3.png'
                sx={{
                  height:"14.5vw",
                  width:"24vw"
                }}
                mb={-8}
              >
              </Box>
              <Box
                component="img"
                className="cardbtn"
                src='./images/Images/cardbtn.png'
                sx={{
                  width:"20vw"
                }}
                ml={5}
              ></Box>
            </Box>
        </Box>
        <Box className='design2'
          component="img"
          src='./images/Images/design2.png'
          sx={{height:"20vw", transform:"rotate(90deg)"}}

        ></Box>
        </Box>
        
    </Box>
  )
}

export default page2
