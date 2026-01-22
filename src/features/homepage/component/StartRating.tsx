import { Box } from '@sparrowengg/twigs-react'
import { FaStar } from "react-icons/fa";
import React from 'react'

const Star = ({ percent }: { percent: number }) => {
  return (
    <Box css={{ position: 'relative', display: 'inline-block', width: 20, height: 20 }}>
     
      <FaStar size={20} color="#ccc" />
      <Box
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${percent}%`,
          overflow: 'hidden',
          height: '100%',
        }}
      >
        <FaStar size={20} color="gold" />
      </Box>
    </Box>
  );
};

const StarRating = ({ rating = 4.3 }) => {
  return (
    <Box>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        let percent = 0;

        if (rating >= starValue) {
          percent = 100;
        } else if (rating > index && rating < starValue) {
          percent = (rating - index) * 100;
        }

        return <Star key={index} percent={percent} />;
      })}
    </Box>
  );
};

export default StarRating;
