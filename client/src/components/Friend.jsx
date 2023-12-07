// Importing necessary components and icons from Material-UI
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

// Importing hooks from Redux and React Router
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Importing action creator for Redux state management
import { setFriends } from "state";

// Importing custom components
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

// Friend component to display each friend's information and manage friendship status
const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  // Hooks for Redux dispatch, navigation, and Redux state selection
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  // Using theme from Material-UI for styling
  const { palette } = useTheme();
  const primaryLight = palette.primary.light; 
  const secondaryMain = palette.secondary.main; 
  const secondaryDark = palette.secondary.dark; 

  // Checking if the current user is friends with the displayed user
  const isFriend = friends.find((friend) => friend._id === friendId);

  // Function to add or remove a friend
  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  // Rendering the friend component
  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box onClick={() => navigate(`/profile/${friendId}`)}>
          <Typography
            // Dynamic styling for hover effect
            color={secondaryDark}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={secondaryMain} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        // Button to toggle friend status
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: secondaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: secondaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

// Exporting Friend for use in other parts of the application
export default Friend;
