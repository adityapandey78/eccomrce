import { Box, Button, Heading, Image, Text } from '@sparrowengg/twigs-react';
import React from 'react';
import { Product } from '../../../commons/types/product';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../commons/store/store';
import { addToCart } from '../../cart/store/cartSlice';
import StartRating from './StartRating';


interface ProductCardProps{
    product:Product
}
const ProductCard:React.FC<ProductCardProps> = ({product}) => {
  const dispatch= useDispatch<AppDispatch>()
  const navigate=useNavigate();
  return (
    <Box
      css={{
        height: '350px',
        // width: '270px',
        // width: '100%',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        gap: '16px',
        overflow:'hidden'
      }}
    >
        <Box css={{ backgroundColor:'#F5F5F5',
                    // width:'270px',
                    // width:'100%',
                    height:'250px',
                    padding:"35px 40px",
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    position:'relative',
                    flexShrink:'0',
                    '&:hover .show-add_to_cart':{
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
        }}>
            {product.discount &&(
                <Text css={{
                    color:'#FAFAFA',
                    backgroundColor:'#DB4444',
                    position:'absolute',
                    top:'4px',
                    left:'12px',
                    padding:'4px 12px',
                    borderRadius:'4px'
    
                }}>{product.discount}</Text>
            )}
            <Box
                css={{
                width: '190px',
                height: '180px',
                backgroundColor: '#F5F5F5',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
        }}
      >
        <Image
          src={product.image}
          alt={product.image}
          css={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
        />
             </Box>

      <Button css={{
        position:'absolute',
        bottom:'0px',
        height:'41px',
        width:'100%',
        padding:'20px 0px',
        backgroundColor:'#000000!important',
        borderRadius:'0px',
        
        opacity: 0,
        transform: 'translateY(8px)',
        pointerEvents: 'auto',
        transition: 'all 0.25s ease',
        cursor:'pointer',
        zIndex:'100'

      }} className='show-add_to_cart' onClick={()=>dispatch(addToCart(product))}>Add to Cart</Button>
        </Box>
      <Box
        css={{
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'space-between',
          alignItems: 'start',
          width:'100%',
          height:'100%',
          flex:'1',
          pointerEvents:'auto',
          cursor:'pointer'
        }}
        onClick={()=>(navigate(`/products/${product.id}`))}
      >
        <Heading size='h6' css={{
            fontSize:'16px',
            lineHeight:'24px',
            fontWeight:'$5',
        }}>{product.title}</Heading>
        <Box css={{
            display:'flex',
            justifyContent:'center',
            alignItems:'start',
            gap:'12px'
        }}>
          <Text css={{
            fontSize:'16px',
            lineHeight:'24px',
            fontWeight:'$5',
            color:'#DB4444'

          }}>${product.price}</Text>
          {product.originalPrice&&(
              <Text css={{
                fontSize:'16px',
                lineHeight:'24px',
                fontWeight:'$5',
                color:'#9096A2',
                textDecoration:'line-through'
    
              }}>${product.originalPrice}</Text>
          )}
        </Box>
        <StartRating rating={product.rating}/>
      </Box>
    </Box>
  );
};

export default ProductCard;
