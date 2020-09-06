import React from "react";
import Alert from "./Alert";

function AlertProvider(props) {
  return (
    <div
      style={{
        width: "100%",
        float: "right",
        position: "absolute",
        zIndex: "1000",
      }}
    >
      {/* <Alert
				msg={"Alert dummy Content...!"}
				seconds={5}
				type={"success"}
				appear={true}
				onDisappear={() => {
					// setAlertAppear(false);
					// setAlertMsg("");
					// setAlertType("");
				}}
			/>
			<Alert
				msg={"Alert dummy Content...!"}
				seconds={5}
				type={"danger"}
				appear={true}
				onDisappear={() => {
					// setAlertAppear(false);
					// setAlertMsg("");
					// setAlertType("");
				}}
			/>
			<Alert
				msg={"Alert dummy Content...!"}
				seconds={5}
				type={"danger"}
				appear={true}
				onDisappear={() => {
					// setAlertAppear(false);
					// setAlertMsg("");
					// setAlertType("");
				}}
			/> */}
    </div>
  );
}

export default AlertProvider;
