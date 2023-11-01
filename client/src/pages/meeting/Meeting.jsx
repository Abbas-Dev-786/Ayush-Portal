import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { joinMeeting } from "../../api";
import logo from "./../../../public/images/logo.svg";

const Meeting = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();

  const { data } = useQuery(["meeting", params.meetingId], joinMeeting);

  let myMeeting = async (element) => {
    // generate Kit Token

    if (data?.token) {
      const appID = 1437058845;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
        appID,
        data.token,
        data.meetingId,
        user?._id,
        user?.firstName + " " + user?.lastName
      );

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // start the call
      zp.joinRoom({
        container: element,

        // showPreJoinView: false,
        // preJoinViewConfig: {
        //   title: "Title",
        // },
        branding: {
          logoURL: logo, // Th branding LOGO URL.
        },

        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        onLeaveRoom() {
          navigate("/dashboard/messages");
        },
      });
    }
  };
  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Meeting;
