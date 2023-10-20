import { Autocomplete, TextField } from "@mui/material";
import { Search } from "lucide-react";
import { useQuery } from "react-query";
import { getAllUsers } from "../../api";
import { useSelector } from "react-redux";
import { useState } from "react";

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
      onInputChange={() => {
        setSearchedUser("");
      }}
      onChange={(_, user) => {
        setSelectedChat(user);
      }}
      getOptionLabel={(option) => `${option?.firstName} ${option?.lastName}`}
      options={data?.filter((el) => el._id !== user._id) || []}
      sx={{
        width: 300,
        mb: 4,
        display: "block",
        mx: "auto",
        "& .MuiAutocomplete-popupIndicator": { transform: "none" },
      }}
      popupIcon={<Search />}
      renderInput={(params) => (
        <TextField {...params} label="Search for Users" />
      )}
    />
  );
};

export default UserSearch;
