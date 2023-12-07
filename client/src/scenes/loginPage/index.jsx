import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      {/* Header section with the site's branding */}
      <Box
        width="100%"
        backgroundColor={theme.palette.secondary.light} // Background color from the theme
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color={theme.palette.primary.main} // Text color from the theme
        >
          Travel Media {/* Site name */}
        </Typography>
      </Box>

      {/* Main content section with login form */}
      <Box
        width={isNonMobileScreens ? "50%" : "93%"} // Responsive width adjustment
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.default} // Background color for the form container
      >
        {/* Introductory text for users */}
        <Typography
          fontWeight="500"
          variant="h5"
          sx={{ mb: "1.5rem", color: theme.palette.primary.dark }} // Text color adjusted for visibility
        >
          If you like to Travel, this is your Site. Come and enjoy talking about adventures around the World!
        </Typography>
        <Form /> {/* Embedding the form component */}
      </Box>
    </Box>
  );
};

export default LoginPage;
