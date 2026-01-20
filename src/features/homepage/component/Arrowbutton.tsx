import { Button, IconButton, type ButtonProps } from '@sparrowengg/twigs-react'
import { FaArrowRightLong } from "react-icons/fa6";
import React from 'react'

const ArrowButton: React.FC<ButtonProps> = ({ css, children, ...props }) => {
  return (
    <IconButton
    color='secondary'
    variant='ghost'
      {...props}
      css={{
        height: '46px',
        color:'#000000',
        width: '46px',
        minWidth: '46px',
        padding: 0,
        borderRadius: '50%',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...css,
        '&&:hover':{
          backgroundColor:'$secondary100'
        }
      }}
      icon={<FaArrowRightLong />}
    >
      {children}
    </IconButton>
  )
}

export default ArrowButton
