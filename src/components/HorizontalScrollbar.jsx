import React, { useContext } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
// import RightArrowIcon from '../assets/icons/arrowRight.svg';
// import LeftArrowIcon from '../assets/icons/arrow-left-bold.svg';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={scrollPrev} className="right-arrow">
//       <img src={LeftArrowIcon} alt="left-arrow" style={{ width: '40px', height: '48px' }} />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={scrollNext} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" style={{ width: '40px', height: '48px' }} />
//     </Typography>
//   );
// };

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu >
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
