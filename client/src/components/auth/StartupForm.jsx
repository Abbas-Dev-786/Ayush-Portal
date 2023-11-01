import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import {
  Avatar,
  Box,
  Button,
  Icon,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { AddAPhotoOutlined } from "@mui/icons-material";
import { registerUser } from "../../api";

const StartupForm = () => {
  const industries = ["Finance", "HealthCare", "Technology"];
  const [checked, setChecked] = useState(false);
  const [industry, setIndustry] = useState("None");
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
      <Box component="img" height={50} m={2} mb={2} src="/images/logo.svg" />

      <Box
        padding="2vw"
        display={"flex"}
        justifyContent="space-between"
        width={{ xs: "100%", sm: "90%" }}
        flexWrap={"wrap"}
        mb={7}
      >
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
          <Typography variant="h5" fontWeight={500} gutterBottom>
            Basic Information
          </Typography>

          <TextField
            variant="outlined"
            label="Company Name"
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

          <Box>
            {industries.map((e, i) => {
              return (
                <Button
                  variant={industry === e ? "contained" : "outlined"}
                  sx={{ m: 0.5 }}
                  key={i}
                  value={e}
                  onClick={(s) => setIndustry(s.target.value)}
                >
                  {e}
                </Button>
              );
            })}
          </Box>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          display={"inline-flex"}
          justifyContent="center"
          gap={2}
          mb={3}
          flexDirection={"column"}
          width={{ xs: "80%", sm: "45%" }}
        >
          <Typography variant="h5" fontWeight={500} gutterBottom>
            Product Details
          </Typography>

          <TextField
            variant="outlined"
            label="Product Name"
            name={"productname"}
            value={cred?.productname}
            type="text"
            fullWidth
            required
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
          <TextField
            variant="outlined"
            label="Description"
            name={"description"}
            value={cred?.description}
            type="text"
            fullWidth
            required
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
          <TextField
            variant="outlined"
            label="Features"
            name={"features"}
            value={cred?.features}
            type="url"
            fullWidth
            required
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
          <TextField
            variant="outlined"
            label="Founder Name"
            name={"foundername"}
            value={cred?.foundername}
            type="url"
            fullWidth
            required
            onChange={(e) =>
              setCred({ ...cred, [e.target.name]: e.target.value })
            }
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent="end"
        gap={2}
        mb={3}
        width={{ xs: "100%", sm: "90%" }}
      >
        <Button disabled={isLoading} type="submit" variant="outlined">
          {isLoading ? "...Logging in" : "Cancel"}
        </Button>
        <Button disabled={isLoading} type="submit" variant="contained">
          {isLoading ? "...Logging in" : "Create Account"}
        </Button>
      </Box>

      <Typography m={2} variant="caption">
        © Copyright Reserved 2023 Ayush Startup Portal
      </Typography>
    </>
  );
};

export default StartupForm;
