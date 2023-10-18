import { TextField } from "@mui/material";

const Searchbar = () => {
  return (
    <TextField
      fullWidth
      sx={{
        visibility: { xs: "hidden", md: "visible" },
        "& .MuiOutlinedInput-root": {
          borderRadius: "50px",

          legend: {
            marginLeft: "30px",
          },
        },
        "& .MuiAutocomplete-inputRoot": {
          paddingLeft: "20px !important",
          borderRadius: "50px",
        },
        "& .MuiInputLabel-outlined": {
          paddingLeft: "20px",
        },
        "& .MuiInputLabel-shrink": {
          marginLeft: "20px",
          paddingLeft: "10px",
          paddingRight: 0,
          background: "white",
        },
      }}
      placeholder="Search"
    />
  );
};

export default Searchbar;
