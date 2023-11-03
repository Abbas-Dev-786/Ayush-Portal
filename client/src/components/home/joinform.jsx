import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { Box, Button, TextField } from "@mui/material";

const JoinForm = () => {
  //   const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [cred, setCred] = useState({
    companyname: "",
    location: "",
    website: "",
  });

  const { mutate, isLoading } = useMutation(registerUser, {
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success("Account Created Successfully!");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Object.values(cred).every((field) => field.length > 0)) {
      toast.error("All fields are mandatory");
      return;
    }

    mutate(cred);

    setCred({
      companyname: "",
      location: "",
      website: "",
    });
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display={"inline-flex"}
        justifyContent="center"
        gap={2}
        mb={10}
        flexDirection={"column"}
        width={{ xs: "80%", sm: "45%" }}
      >
        <TextField
          variant="outlined"
          label="Full Name"
          name={"companyname"}
          value={cred?.companyname}
          type="text"
          fullWidth
          required
          onChange={(e) =>
            setCred({ ...cred, [e.target.name]: e.target.value })
          }
        />
        <TextField
          variant="outlined"
          label="Location"
          name={"location"}
          value={cred?.location}
          type="text"
          fullWidth
          required
          onChange={(e) =>
            setCred({ ...cred, [e.target.name]: e.target.value })
          }
        />
        <TextField
          variant="outlined"
          label="Website"
          name={"website"}
          value={cred?.website}
          type="url"
          fullWidth
          required
          onChange={(e) =>
            setCred({ ...cred, [e.target.name]: e.target.value })
          }
        />
      </Box>
    </>
  );
};

export default JoinForm;
