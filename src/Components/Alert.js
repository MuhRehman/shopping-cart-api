import React, { Component } from "react"
import Toast from "react-bootstrap/Toast"

const Alert = (props) => {
	return (
		<div
			style={{
				width: "100%",
				float: "right",
				margin: "15px",
			}}
		>
			<Toast
				show={props.appear}
				onClose={props.onDisappear}
				delay={props.seconds * 1000}
				autohide
				style={{
					minWidth: "350px",
					backgroundColor: props.type,
					float: "right",
				}}
			>
				<Toast.Header className="m-0 pl-3">
					{/* <img src="" className="rounded mr-2" alt="" /> */}
					<strong className="mr-auto">Notification</strong>
					<small className="ml-auto">Just Now</small>
				</Toast.Header>
				<Toast.Body
					className={`m-0 p-3 alert alert-${props.type}`}
					style={{ borderRadius: "0rem" }}
				>
					{props.msg}
				</Toast.Body>
			</Toast>
		</div>
	)
}

export default Alert
