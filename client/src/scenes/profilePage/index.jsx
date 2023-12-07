import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import UserWidget from "scenes/widgets/UserWidget";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams(); // Get user ID from URL parameters
  const token = useSelector((state) => state.token); // Access the stored token for authentication
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)"); // Responsive design breakpoint
  const theme = useTheme(); // Accessing the theme for styling

  // Dynamic background color based on the theme mode
  const isDarkMode = theme.palette.mode === 'dark';
  const backgroundColor = isDarkMode ? theme.palette.background.default : theme.palette.primary.main;
  const textColor = isDarkMode ? theme.palette.text.primary : theme.palette.text.secondary;

  // Fetch user data from the API
  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // Fetch user data on component mount

  if (!user) return null; // Render nothing if user data is not available

  return (
    <Box>
      <Navbar /> {/* Navigation bar component */}
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
        sx={{ backgroundColor, color: textColor }}
        marginTop= "100px"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
