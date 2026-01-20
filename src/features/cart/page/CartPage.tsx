import {
  Flex,
  Box,
  Heading,
  Image,
  Text,
  IconButton,
  Button,
  Input,
} from '@sparrowengg/twigs-react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import React from 'react';
import ButtonPrimary from '../../../commons/components/ButtonPrimary';
import HorizontalLine from '../../../commons/components/HorizontalLine';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../commons/store/store';
import { increment, decrement, removeItem } from '../../../features/cart/store/cartSlice';

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const cartItems = useSelector(
    (state: RootState) => state.cart.products
  );

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-around"
      css={{
        padding: '50px 135px',
        width: '100vw',
        minHeight: '100vh',
      }}
    >
      <Flex flexDirection="column" css={{ width: '100%', gap: '24px' }}>
        {/* Header */}
        <Flex
          css={{
            padding: '24px 40px',
            width: '100%',
            height: '72px',
            alignItems: 'center',
            borderRadius: '4px',
            boxShadow: '0 1px 13px 0 rgba(0, 0, 0, 0.05)',
          }}
        >
          <Flex css={{ width: '40%' }}>
            <Heading size="h3" css={{ fontSize: '16px', fontWeight: '$4' }}>
              Product
            </Heading>
          </Flex>
          <Flex css={{ width: '20%' }}>
            <Heading size="h3" css={{ fontSize: '16px', fontWeight: '$4' }}>
              Price
            </Heading>
          </Flex>
          <Flex css={{ width: '20%' }}>
            <Heading size="h3" css={{ fontSize: '16px', fontWeight: '$4' }}>
              Quantity
            </Heading>
          </Flex>
          <Flex css={{ width: '20%', justifyContent: 'flex-end' }}>
            <Heading size="h3" css={{ fontSize: '16px', fontWeight: '$4' }}>
              Subtotal
            </Heading>
          </Flex>
        </Flex>

        {/* Rows */}
        {cartItems.map((item) => (
          <Flex
            key={item.id}
            css={{
              padding: '24px 40px',
              width: '100%',
              height: '100px',
              alignItems: 'center',
              borderRadius: '4px',
              boxShadow: '0 1px 13px 0 rgba(0, 0, 0, 0.05)',
            }}
          >
            <Flex alignItems="center" gap="$10" css={{ width: '40%' }}>
              <Box
                css={{
                  width: '54px',
                  height: '54px',
                  padding: '6px',
                  position: 'relative',
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  css={{ maxHeight: '100%', maxWidth: '100%' }}
                />
                <IconButton
                  variant="ghost"
                  color="secondary"
                  icon={<RxCross2 size={10} />}
                  onClick={() => dispatch(removeItem(item.id))}
                  css={{
                    position: 'absolute',
                    top: '-6px',
                    left: '-10px',
                    width: '18px',
                    height: '18px',
                    backgroundColor: '#DB4444',
                    color: '#fff',
                    borderRadius: '50%',
                  }}
                />
              </Box>
              <Text>{item.title}</Text>
            </Flex>

            <Flex css={{ width: '20%' }}>
              <Text>${item.price}</Text>
            </Flex>

            <Flex css={{ width: '20%' }}>
              <Flex
                alignItems="center"
                css={{
                  width: '72px',
                  height: '44px',
                  borderRadius: '4px',
                  border: '1.5px solid rgba(0, 0, 0, 0.40)',
                  padding: '6px 12px',
                  justifyContent: 'space-between',
                }}
              >
                <Text>{item.quantity}</Text>
                <Flex flexDirection="column">
                  <IconButton
                    variant="ghost"
                    icon={<IoIosArrowUp />}
                    color="secondary"
                    onClick={() => dispatch(increment(item.id))}
                  />
                  <IconButton
                    variant="ghost"
                    icon={<IoIosArrowDown />}
                    color="secondary"
                    onClick={() => dispatch(decrement(item.id))}
                  />
                </Flex>
              </Flex>
            </Flex>

            <Flex css={{ width: '20%', justifyContent: 'flex-end' }}>
              <Text>${(item.price * item.quantity).toFixed(2)}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>

      {/* Bottom */}
      <Flex
        css={{
          width: '100%',
          marginTop: '40px',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Flex gap="$12">
          <Input placeholder="Coupon Code" css={{ width: '300px', height: '56px' }} />
          <ButtonPrimary>Apply Coupon</ButtonPrimary>
        </Flex>

        <Box
          css={{
            width: '420px',
            border: '1.5px solid #000',
            borderRadius: '4px',
            padding: '32px 24px',
          }}
        >
          <Heading size="h3" css={{ fontSize: '20px', marginBottom: '24px' }}>
            Cart Total
          </Heading>

          <Flex justifyContent="space-between" css={{ marginBottom: '12px' }}>
            <Text>Subtotal:</Text>
            <Text>${subtotal.toFixed(2)}</Text>
          </Flex>

          <HorizontalLine css={{ width: '100%' }} />

          <Flex justifyContent="space-between" css={{ margin: '12px 0' }}>
            <Text>Shipping:</Text>
            <Text>Free</Text>
          </Flex>

          <HorizontalLine css={{ width: '100%' }} />

          <Flex justifyContent="space-between" css={{ margin: '16px 0 24px' }}>
            <Text css={{ fontWeight: '$6' }}>Total:</Text>
            <Text css={{ fontWeight: '$6' }}>${subtotal.toFixed(2)}</Text>
          </Flex>

          <Box css={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonPrimary onClick={() => navigate('/billingPage')}>
              Proceed to checkout
            </ButtonPrimary>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CartPage;
