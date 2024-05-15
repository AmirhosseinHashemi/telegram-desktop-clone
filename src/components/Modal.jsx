import {cloneElement, createContext, useContext, useState} from "react";
import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

const Overlay = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  font-family: "Roboto", "Vazirmatn", sans-serif;
  font-size: 1.4rem;
`;

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContext = createContext();

function Modal({children}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <ModalContext.Provider value={{openModal, closeModal, isOpenModal}}>
      {children}
    </ModalContext.Provider>
  );
}

function Button({children}) {
  const {openModal} = useContext(ModalContext);

  return cloneElement(children, {onClick: openModal});
}

function Window({children}) {
  const {isOpenModal, closeModal} = useContext(ModalContext);
  const modalRef = useOutsideClick(closeModal);

  return isOpenModal ? (
    <Overlay>
      <StyledModal ref={modalRef}>{children}</StyledModal>
    </Overlay>
  ) : null;
}

Modal.Button = Button;
Modal.Window = Window;

export default Modal;
