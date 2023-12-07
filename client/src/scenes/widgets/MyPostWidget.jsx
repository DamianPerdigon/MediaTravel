import {
  EditOutlined,
  DeleteOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";

const MyPostWidget = ({ picturePath }) => {
  // Setup for Redux dispatch and component states
  const dispatch = useDispatch();
  const [isUpload, setIsUpload] = useState(false); // State for handling upload visibility
  const [image, setImage] = useState(null); // State for the uploaded image
  const [post, setPost] = useState(""); // State for post content
  const { palette } = useTheme(); // Accessing theme for styling
  const { _id } = useSelector((state) => state.user); // Current user's ID from Redux
  const token = useSelector((state) => state.token); // JWT token from Redux
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)"); // Responsive design check

  // Function to handle post creation
  const handlePost = async () => {
    if (!post && !image) {
      // Exit function if no text or image
      return;
    }

    // Create a new FormData object for the post request
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    // Send post request to create a new post
    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await response.json();

    // Update Redux state with the new posts
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  return (
    <WidgetWrapper>
      {/* Post input area */}
      <FlexBetween gap="1.5rem">
        <UserImage image={picturePath} />
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          inputProps={{ style: { color: 'white' } }}
          sx={{ width: "100%", borderRadius: "2rem", padding: "1rem 2rem" }}
        />
      </FlexBetween>
      {/* Image upload section */}
      {isUpload && (
        <Box borderRadius="5px" mt="1rem" p="1rem">
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png, .mp4"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box {...getRootProps()} p="1rem" width="100%" sx={{ "&:hover": { cursor: "pointer" } }}>
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Upload something new about your travels!</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton onClick={() => setImage(null)} sx={{ width: "15%" }}>
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider />

      {/* Post submission area */}
      <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={() => setIsUpload(!isUpload)}>
          <Typography color={palette.primary.main} sx={{ "&:hover": { cursor: "pointer", color: palette.secondary.main } }}>
            Upload
          </Typography>
        </FlexBetween>

        {!isNonMobileScreens && (
          <FlexBetween gap="0.25rem">
            <MoreHorizOutlined sx={{ color: palette.primary.main }} />
          </FlexBetween>
        )}

        <Button
          disabled={!post && !image}
          onClick={handlePost}
          sx={{ color: palette.background.alt, backgroundColor: palette.primary.main, borderRadius: "3rem" }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyPostWidget
