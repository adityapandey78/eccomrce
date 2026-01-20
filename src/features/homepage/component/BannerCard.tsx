import { Box,Heading, Text, Button } from "@sparrowengg/twigs-react";
const BannerCard = ({
  title,
  subtitle,
  cta = "Shop Now",
  height,
  bgImage,
}: {
  title: string;
  subtitle?: string;
  cta?: string;
  height: string;
  bgImage: string;
}) => (
  <Box
    css={{
      position: "relative",
      height,
      borderRadius: "$4",
      overflow: "hidden",
      backgroundImage: `url(${bgImage})`,
      backgroundColor:'#000000',
      backgroundSize: "contain",
      backgroundRepeat:'no-repeat',
      backgroundPosition: "center",
      display: "flex",
      alignItems: "flex-end",
      padding: "32px 42px 28px 36px",
      color: "$white900",
      
    }}
  >
    <Box css={{ maxWidth: "70%"}}>
      <Heading size="h3" css={{ color: "$white900" }}>
        {title}
      </Heading>
      {subtitle && (
        <Text size="sm" css={{ color: "$white700", mt: "$2" }}>
          {subtitle}
        </Text>
      )}
      <Button size="sm" variant='ghost' css={{ mt: "$4" , padding:'0',color:'#fff'}}>
        {cta}
      </Button>
    </Box>
  </Box>
);
export default BannerCard