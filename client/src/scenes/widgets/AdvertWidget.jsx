import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme(); // Access theme for consistent styling
  // Defining color variables for easy reference
  const primaryMain = palette.primary.main; // Primary color for high emphasis elements
  const secondaryMain = palette.secondary.main; // Secondary color for medium emphasis
  const textContrast = palette.text.primary; // Text color for high contrast and readability

  return (
    <WidgetWrapper>
      {/* Top section with title and ad creation link */}
      <FlexBetween>
        <Typography color={primaryMain} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={textContrast}>Create Ad</Typography>
      </FlexBetween>
      {/* Image for the advertisement */}
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      {/* Bottom section with sponsor's name and website */}
      <FlexBetween>
        <Typography color={secondaryMain}>amazingtours</Typography>
        <Typography color={textContrast}>amazingtours.com</Typography>
      </FlexBetween>
      {/* Ad description */}
      <Typography color={textContrast} m="0.5rem 0">
        With our Tours friends, we will take you to amazing places. Coming Soon!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
