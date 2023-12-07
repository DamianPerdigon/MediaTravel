// Importing the Box component from Material-UI
import { Box } from "@mui/material";

// UserImage component for displaying user images
const UserImage = ({ image, size = "60px" }) => {
  return (
    // Box component to encapsulate the image, setting its width and height
    <Box width={size} height={size}>
      <img
        // Styling the image to be circular and cover the entire area
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
