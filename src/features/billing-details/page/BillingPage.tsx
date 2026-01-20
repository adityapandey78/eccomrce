import {
  Box,
  Checkbox,
  Flex,
  FormInput,
  FormLabel,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Text,
} from '@sparrowengg/twigs-react';
import { Form } from 'react-router-dom';
import ButtonPrimary from '../../../commons/components/ButtonPrimary';
import HorizontalLine from '../../../commons/components/HorizontalLine';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../commons/store/store';


const BillingPage = () => {

  //  const dispatch = useDispatch<AppDispatch>();

  const cartItems = useSelector(
    (state: RootState) => state.cart.products
  );

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <Flex
      css={{
        minHeight: '100vh',
        width: '100vw',
        padding: '50px 135px',
        flexDirection: 'column',
        gap: '40px',
      }}
    >
      <Heading
        size="h1"
        css={{
          fontSize: '36px',
          lineHeight: '30px',
          letterSpacing: '1px',
          fontWeight: '$5',
        }}
      >
        Billing Details
      </Heading>

      <Flex
        css={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '80px',
        }}
      >
        {/* Left: Form */}
        <Box css={{ width: '500px' }}>
          <Form>
            <Flex flexDirection="column" gap="$10">
              <Box>
                <FormLabel requiredIndicator htmlFor="firstName">
                  First Name
                </FormLabel>
                <FormInput id="firstName" />
              </Box>

              <Box>
                <FormLabel htmlFor="companyName">Company Name</FormLabel>
                <FormInput id="companyName" />
              </Box>

              <Box>
                <FormLabel requiredIndicator htmlFor="addressLine1">
                  Street Address
                </FormLabel>
                <FormInput id="addressLine1" />
              </Box>

              <Box>
                <FormLabel htmlFor="addressLine2">
                  Apartment, floor, etc. (optional)
                </FormLabel>
                <FormInput id="addressLine2" />
              </Box>

              <Box>
                <FormLabel requiredIndicator htmlFor="town">
                  Town/City
                </FormLabel>
                <FormInput id="town" />
              </Box>

              <Box>
                <FormLabel requiredIndicator htmlFor="phoneNumber">
                  Phone Number
                </FormLabel>
                <FormInput id="phoneNumber" />
              </Box>

              <Box>
                <FormLabel requiredIndicator htmlFor="email">
                  Email Address
                </FormLabel>
                <FormInput id="email" />
              </Box>

              <Checkbox id="save-info" size="sm">
                Save this information for faster check-out next time
              </Checkbox>
            </Flex>
          </Form>
        </Box>

        {/* Right: Order Summary */}
        <Box css={{ width: '600px' }}>
          <Flex flexDirection="column" gap="$12">
            {cartItems.map((item) => (
              <Flex
                key={item.id}
                alignItems="center"
                justifyContent="space-between"
              >
                <Flex alignItems="center" gap="$10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    css={{ width: '48px', height: '48px' }}
                  />
                  <Text>{item.title}</Text>
                </Flex>
                <Text>${item.price}</Text>
              </Flex>
            ))}

            <Flex justifyContent="space-between" css={{ marginTop: '16px' }}>
              <Text>Subtotal:</Text>
              <Text>${subtotal}</Text>
            </Flex>
            <HorizontalLine css={{width:'100%'}}/>
            <Flex justifyContent="space-between">
              <Text>Shipping:</Text>
              <Text>Free</Text>
            </Flex>
            <HorizontalLine css={{width:'100%'}}/>
            <Flex justifyContent="space-between" css={{ marginBottom: '24px' }}>
              <Text css={{ fontWeight: '$6' }}>Total:</Text>
              <Text css={{ fontWeight: '$6' }}>${subtotal}</Text>
            </Flex>
            {/* <HorizontalLine css={{width:'100%'}}/> */}
            <RadioGroup defaultValue='COD'>
                <Flex alignItems="center" justifyContent="space-between">
                <Radio value='Bank'>Bank</Radio>
                <Flex gap="$8">
                    <Image src="/Assets/bkash.png" alt='payment-icons' css={{ height: '28px', width:'42px', objectFit:'contain' }} />
                    <Image src="/Assets/visa.png" alt='payment-icons'  css={{ height: '28px', width:'42px', objectFit:'contain' }} />
                    <Image src="/Assets/mastercard.png"  alt='payment-icons' css={{ height: '28px', width:'42px', objectFit:'contain'}} />
                    <Image src="/Assets/nagad.png" alt='payment-icons'  css={{ height: '28px', width:'42px', objectFit:'contain' }} />
                </Flex>
                </Flex>

                <Radio value='COD'>Cash on Delivery</Radio>
            </RadioGroup>
            <Flex gap="$12" css={{height:'56px'}}>
              <FormInput placeholder="Coupon Code" css={{height:'100%'}} />
              <ButtonPrimary>Apply Coupon</ButtonPrimary>
            </Flex>

            <ButtonPrimary css={{ marginTop: '12px', width: '200px' }}>
              Place Order
            </ButtonPrimary>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default BillingPage;
