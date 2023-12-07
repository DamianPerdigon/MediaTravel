import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch(); // Redux dispatch to trigger actions
  const { palette } = useTheme(); // Access theme for consistent styling
  const token = useSelector((state) => state.token); // Retrieve JWT token from Redux
  const friends = useSelector((state) => state.user.friends); // Retrieve friend list from Redux

  // Function to fetch and update friends list
  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` }, // Authorization header
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data })); // Update Redux state with fetched friends
  };

  // Fetch friends on component mount
  useEffect(() => {
    getFriends();
  }, []); // Dependency array to run only once

  return (
    <WidgetWrapper>
      {/* Title for the friend list */}
      <Typography
        color={palette.primary.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      {/* Friend items */}
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((friend) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
