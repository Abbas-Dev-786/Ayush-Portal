import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const AuthBox = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-evenly"
      height="100%"
    >
      <Box component="img" height={50} mb={3} src="./images/logo.svg" />

      {children}

      <Typography mt={5} variant="caption">
        © Copyright Reserved 2023 Ayush Startup Portal
      </Typography>
    </Box>
  );
};

export default AuthBox;

AuthBox.propTypes = {
  children: PropTypes.any,
};
