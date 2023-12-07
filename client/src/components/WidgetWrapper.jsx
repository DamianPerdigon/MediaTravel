// Importing Box component and styled utility from Material-UI
import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Creating a styled component, WidgetWrapper, based on the Box component
const WidgetWrapper = styled(Box)(({ theme }) => ({
  // Setting padding for the widget
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",

  // Using the theme's secondary light color for the background
  backgroundColor: theme.palette.secondary.light,
  borderRadius: "0.75rem",
}));

export default WidgetWrapper;
