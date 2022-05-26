import React, { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useAuth } from "../../context/AuthProvider";
import { postUserImage } from "../../services/server.js";
function UserModal({ isProfileModal,handleProfile }) {

  const auth = useAuth();
  const fileImgRef = useRef();

  const uploadImage = async()=>{
    const response = await postUserImage(auth.token,auth.user.id, fileImgRef.current.files[0]);
    console.log(response);
  }
  return (
    <Modal show={isProfileModal} onHide={handleProfile}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Image
        src={auth.user?.img_url && auth.user.img_url}
        style={{ width: "auto", height: "15rem" }}
      />
            <Form.Control
              required
              ref={fileImgRef}
              type="file"
              accept="image/*"
            />
        <Button onClick={uploadImage}>Upload/Change image</Button>
      <Modal.Body>{auth.user?.firstName && `First name: ${auth.user?.firstName}`}</Modal.Body>
      <Modal.Body>{auth.user?.lastName && `ALast name: ${auth.user?.lastName}`}</Modal.Body>
      <Modal.Body>{auth.user?.phoneNumber && `Phone number: ${auth.user?.phoneNumber}`}</Modal.Body>
      <Modal.Body>{auth.user?.email && `Email: ${auth.user?.email}`}</Modal.Body>
    </Modal>
  );
}

export default UserModal;
