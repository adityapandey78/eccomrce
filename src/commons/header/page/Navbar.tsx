import { Box, css, Flex, FormInput, Heading, IconButton, Input, styled, Text } from '@sparrowengg/twigs-react'
import { FiSearch, } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import HorizontalLine from '../../components/HorizontalLine';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Searchbar from '../components/Searchbar';


const NavBar=styled('nav',{
    display:'flex',
    padding:'35px 135px 15px 135px',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottom:'solid #80808036 2px',
    position:'sticky',
    top:0,
    backgroundColor:'#FFFFFF',
    zIndex:100
})
const Navbar = () => {
    const cartItems = useSelector(
    (state: RootState) => state.cart.products
  );
  const noOfItems=cartItems.length;

   const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Contact', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Sign Up', path: '' },
    ];
    const navigate=useNavigate();

  return (
    <NavBar>
        <Box css={{color:"#000000", display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems:'center',gap:'160px'}}>
            <Heading css={{fontSize:'24px',lineHeight:'24px',fontWeight:'$7',letterSpacing:'2px',cursor:'pointer'}} onClick={()=>navigate('/')}>Exclusive</Heading>
            <Box css={{display:'flex', flexDirection:'row', justifyContent:'space-between',gap:'48px'
            }}>
                {navItems.map((item) => (
                    <Text
                        key={item.label}
                        css={{
                        color: "#000000",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontWeight: "$5",
                        cursor: "pointer",
                        display: "inline-block",
                        position: "relative",

                        '&::after': {
                            content: '',
                            position: 'absolute',
                            left: 0,
                            bottom: '-2px',
                            width: '100%',
                            height: '2px',
                            backgroundColor: '$primary',
                            transform: 'scaleX(0)',
                            transformOrigin: 'left',
                            transition: 'transform 0.2s ease',
                        },

                        '&:hover::after': {
                            transform: 'scaleX(1)',
                        },
    }}
                        onClick={() => navigate(item.path)}
                    >
                        {item.label}
                    </Text>
                ))}
            </Box>
        </Box>
        <Box css={{display:'flex', flexDirection:'row',gap:'$12'}}>
            
            <Box css={{color:'Black', display:'flex',
                justifyContent:'space-around', alignItems:'center', gap:'$8'
            }}>
               <Searchbar/>
                <IconButton variant='ghost'  color='default' icon={<IoMdHeartEmpty size={20}/>}/>
                <Box css={{position:'relative'}}>
                <IconButton variant='ghost'  color='default' onClick={()=>navigate('/cart')} icon={ <GrCart size={20}/>} css={{ position:'relative'}}/>
                <Text css={{
                    position:'absolute',
                    top:'-8px',
                    right:'-6px',
                    color:'$negative700',
                    fontWeight:'$8',
                    backgroundColor:'$negative200',
                    height:'15px',
                    width:'15px',
                    borderRadius:'50%',
                    textAlign:'center',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>{noOfItems}</Text>

                </Box>
                
            </Box>
        </Box>
    </NavBar>
  )
}

export default Navbar