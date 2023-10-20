import { useState } from "react";
import dayjs from "dayjs";
import { Modal, Box, Typography, Button } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { socket } from "../../socket";
import { createMeeting } from "../../api";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  //   height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 5,
};

const URL = import.meta.env.PROD
  ? "https://ayush-portal-startup.vercel.app"
  : "http://localhost:5173";

const MeetingScheduler = ({ open, setModel, to }) => {
  const [value, setValue] = useState(dayjs());
  const [meetingId, setMeedingId] = useState("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation(createMeeting, {
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: (data) => {
      setMeedingId(data._id);
    },
  });

  const { user } = useSelector((state) => state.user);

  const sendMessage = async () => {
    mutate({
      roomId: `room-${Math.random()}`,
      host: user._id,
      attendee: to,
      startTime: value.$d,
    });

    if (meetingId) {
      socket.emit("send-msg", {
        to,
        from: user._id,
        message: `A Meeting has been sceduled on ${value.$d} please copy this link ${URL}/dashboard/meetings/${meetingId}`,
      });
      queryClient.invalidateQueries({ queryKey: ["messages"] });
      queryClient.invalidateQueries({ queryKey: ["chats"] });

      setModel(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setModel(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h5" gutterBottom>
          Select Meeting Date and Time
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker", "TimePicker", "DateTimePicker"]}
          >
            <DemoItem>
              <DateTimePicker
                minDate={dayjs()}
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>

        <Button
          variant="contained"
          size="small"
          sx={{ display: "block", mx: "auto", mt: 3 }}
          onClick={sendMessage}
        >
          Schedule Meeting
        </Button>
      </Box>
    </Modal>
  );
};

export default MeetingScheduler;
