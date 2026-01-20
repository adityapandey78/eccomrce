import { Box, Flex, Heading, Text } from "@sparrowengg/twigs-react"
import React from "react"
import ButtonPrimary from "../components/ButtonPrimary"
import Path from "../components/Path"
import { useNavigate } from "react-router-dom"
const Error:React.FC=()=>{
    const navigate= useNavigate()
    return(
        <Box css={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            justifyItems:'center',
            padding:'5% 10% ',
            height:'80vh'
            

        }}>
            {/* <Box css={{ padding:""}}>
                <Path path={"error/path"}/>
            </Box> */}
            <Flex flexDirection="column" alignItems="center" justifyContent="space-between" css={{ gap:'$20',marginTop:'12%'}}>
                <Heading size="h1" css={{
                    color:"#000000",
                    fontSize:'100px',
                    lineHeight:'110px'
                }}>404 Not Found</Heading>
                <Text css={{
                    fontSize:'16px',
                    lineHeight:'24px',
                    color:'#000000'
                }}>Your visited page not found. You may go home page.</Text>
            </Flex>
            <Box css={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'8%'}}>
            <ButtonPrimary css={{width:'254px',cursor:'pointer'}} onClick={()=>(navigate('/'))}>Back to home page</ButtonPrimary>
            </Box>
        </Box>
    )
}

export default Error;