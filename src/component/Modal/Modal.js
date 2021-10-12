import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal--root");

class Modal extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log("нажали ESC");
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
