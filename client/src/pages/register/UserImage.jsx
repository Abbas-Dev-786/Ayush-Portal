import React, { useContext, useEffect, useRef, useState } from "react";
import AuthBox from "../../components/auth/AuthBox";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { ArrowForward, ClearOutlined } from "@mui/icons-material";
import { FormContext } from "./FormContext";
import { baseURL } from "../../api";

const UserImage = () => {
  const inputRef = useRef();
  const [image, setImage] = useState("");
  const [filename, setFileName] = useState("");
  useEffect(() => {
    console.log(image, filename);
  }, [image]);
  const { user } = useContext(FormContext);

  return (
    <AuthBox>
      <Box component={"form"} onClick={() => inputRef.current.click()}>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            console.log(files);
            if (files) {
              setImage(files[0]);
            }
          }}
        />

        {image ? (
          <Avatar
            sx={{ width: 150, height: 150 }}
            src={window.URL.createObjectURL(image)}
            alt={filename}
          />
        ) : (
          <Avatar sx={{ width: 150, height: 150 }} />
        )}
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
      >
        {image ? (
          <>
            <Box>
              <Button
                onClick={async () => {
                  const res = await fetch(`${baseURL}/auth/profile`, {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      file: image?.name,
                    }),
                  });
                  const data = await res.json();
                  console.log(data);
                }}
                variant="contained"
                sx={{ mx: 2 }}
                endIcon={<ArrowForward />}
                color="success"
              >
                Next
              </Button>
              <Button
                onClick={() => setImage(null)}
                variant="outlined"
                startIcon={<ClearOutlined />}
                color="error"
              >
                Remove
              </Button>
            </Box>
          </>
        ) : (
          <Typography variant="body1">Add Profle picture</Typography>
        )}
      </Box>
    </AuthBox>
  );
};

export default UserImage;
