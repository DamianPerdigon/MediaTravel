import { Box } from '@mui/material';
import { styled } from '@mui/system';

// Styles for FlexBetween
const flexBetweenStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const FlexBetween = styled(Box)(flexBetweenStyles);

export default FlexBetween;
export { FlexBetween };
