import { Box, Flex, Heading, type BoxProps } from '@sparrowengg/twigs-react'
import Tags from './Tags'

interface SectionHeaderProps extends BoxProps {
  tag?: string
  title: string;
  leftExtra?:React.ReactNode
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag = "Today's",
  title,
  children,
  leftExtra,
  css,
  ...props
}) => {
  return (
    <Box
      {...props}
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        ...css,
      }}
    >
    
      <Tags css={{ width: '100%'}}>
        {tag}
      </Tags>

      
      <Box
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      > 
      <Flex alignItems='end' gap='$10'>
        <Heading size="h4">{title}</Heading>
        {leftExtra}
      </Flex>
        
       
        <Box css={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
         
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default SectionHeader
