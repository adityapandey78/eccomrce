import { Box, CircleLoader, Flex, Text } from '@sparrowengg/twigs-react'


const Loading = () => {
  return (
   <Flex flexDirection='column' justifyContent='center' alignItems='center' css={{
height:'100vh',
width:'100vw',
gap:'$15'
   }}>
    <CircleLoader size='2xl' color='primary'></CircleLoader>
        <Text size='md'>
        Looding the data... Kinldy hold on...
        </Text>
   </Flex>
  )
}

export default Loading