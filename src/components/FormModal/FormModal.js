import React, { useState } from "react";
import Modal from "react-modal";
import ContactForm from "../ContactForm/ContactForm";
import "./FormModal.css";
import "../../index.css";

Modal.setAppElement("#root");
export default function FormModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <button className="btn" onClick={() => setModalIsOpen(true)}>
        Ask Now
      </button>
      <Modal
        isOpen={modalIsOpen}
        className="form-modal"
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(1px)",
            zIndex: "10000",
          },
          content: {
            color: "orange",
          },
        }}
        // shouldCloseOnOverlayClick={false}
      >
        <ContactForm />
        <div>
          <button
            className="btn cancel-btn"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
