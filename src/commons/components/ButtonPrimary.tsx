import React, { ReactNode } from 'react';
import { Button, type ButtonProps } from '@sparrowengg/twigs-react';


const ButtonPrimary: React.FC<ButtonProps> = ({ css, children, content:string,...props }) => {
  return (
    <Button
    color='default'
    {...props}
      css={{
        height: "56px",
        padding: "16px 48px",
        backgroundColor: "#DB4444",
        borderRadius: "4px",
        fontSize: "16px",
        lineHeight: "24px",
        color:'#fff !important',

        "&:hover": {
          backgroundColor: "#c93b3b !important",
        },
        "&:active:not(:disabled)":{
           backgroundColor: "#c93b3b !important",
        },
        '&:focus':{
          backgroundColor: "#c93b3b !important",
        },
        ...css
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
