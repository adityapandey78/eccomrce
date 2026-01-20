import { Box, type BoxProps } from '@sparrowengg/twigs-react'
import React from 'react'

const TitleCmponent:React.FC<BoxProps> = ({children,css, ...props}) => {
  return (
   <Box css={{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    ...css

   }} {...props}>
    {children}
   </Box>
  )
}

export default TitleCmponent