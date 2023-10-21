import PropTypes from "prop-types";
import { useState } from "react";
import { Autocomplete, TextField, Box } from "@mui/material";
import { Search } from "lucide-react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../api";

const UserSearch = ({ setSelectedChat }) => {
  const [searchedUser, setSearchedUser] = useState("");
  const { user } = useSelector((state) => state.user);
  const { data } = useQuery(["users"], getAllUsers);

  return (
    <Autocomplete
      disablePortal
      disableClearable
      id="user-search-bar"
      autoHighlight={true}
      size="small"
      inputValue={searchedUser}
      key={(option) => option._id}
      onInputChange={() => {
        setSearchedUser("");
      }}
      onChange={(_, user) => {
        setSelectedChat(user);
      }}
      getOptionLabel={(option) =>
        `${option?.firstName} ${option?.lastName} ${option._id}`
      }
      options={data?.filter((el) => el._id !== user._id) || []}
      sx={{
        width: 300,
        mb: 4,
        display: "block",
        mx: "auto",
        "& .MuiAutocomplete-popupIndicator": { transform: "none" },
      }}
      popupIcon={<Search />}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.firstName + " " + option.lastName}
        </Box>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Search for Users" />
      )}
    />
  );
};

export default UserSearch;

UserSearch.propTypes = {
  setSelectedChat: PropTypes.func,
};
