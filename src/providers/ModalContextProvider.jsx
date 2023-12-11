import { useState } from "react";
import { ModalContext } from "../context/ModalContext";

const ModalContextProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const handleModalView = () => {
        setModal(true);
    };
    const handleModalClose = () => {
        setModal(false);
    };
    return (
        <>
            <ModalContext.Provider
                value={{
                    modal,
                    setModal,
                    handleModalView,
                    handleModalClose,
                }}>
                {children}
            </ModalContext.Provider>
        </>
    );
};

export default ModalContextProvider;
