// Importing necessary components and hooks from Material-UI and Redux
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

// Importing custom components for different sections of the page
import Navbar from 'scenes/navbar';
import UserWidget from 'scenes/widgets/UserWidget';
import MyPostWidget from 'scenes/widgets/MyPostWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import AdvertWidget from 'scenes/widgets/AdvertWidget';
import FriendListWidget from 'scenes/widgets/FriendListWidget';

// Background image for the HomePage
import backgroundImage from '../../assets/time-travel-background-cartoon-design-top-view-wallpaper-with-composition-passport_198565-2071.jpg';

// Defining the HomePage component with a travel theme
const HomePage = () => {
  // Using theme and media query to adapt styles for different screen sizes and themes
  const theme = useTheme(); 
  const isDarkMode = theme.palette.mode === 'dark'; 
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
  const { _id, picturePath } = useSelector(state => state.user);

  // Defining custom styles for the travel theme layout
  const travelStyles = {
    container: {
      // Background styling conditional on dark mode and screen size
      backgroundImage: isDarkMode ? 'none' : `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      backgroundColor: isDarkMode ? '#000000' : 'rgba(255, 255, 255, 0.9)', // Black for dark mode, translucent white for light mode
      width: '100%',
      padding: '2rem 6%',
      display: isNonMobileScreens ? 'flex' : 'block',
      gap: '0.5rem',
      justifyContent: 'space-between',
      marginTop: "100px",
    },
    userSection: {
      // Styling for the user section, responsive to screen size
      flexBasis: isNonMobileScreens ? '26%' : undefined,
    },
    postsSection: {
      // Styling for the posts section, responsive to screen size
      flexBasis: isNonMobileScreens ? '42%' : undefined,
      marginTop: isNonMobileScreens ? undefined : '2rem',
    },
    adsSection: {
      // Styling for the advertisement section
      flexBasis: '26%',
    },
  };

  // Rendering the HomePage component with its subcomponents
  return (
    <Box>
      <Navbar />
      <Box style={travelStyles.container}>
        <Box style={travelStyles.userSection}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box style={travelStyles.postsSection}>
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box style={travelStyles.adsSection}>
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

// Exporting HomePage for use in other parts of the application
export default HomePage;
