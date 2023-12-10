import { useState } from "react";
import FormContext from "../context/FormContext";

const FormContextProvider = ({ children }) => {
    const [formState, setFormState] = useState();
    const handleFormState = () => {
        if (formState === "signup") {
            setFormState("login");
        } else {
            setFormState("signup");
        }
    };

    return (
        <FormContext.Provider
            value={{
                formState,
                setFormState,
                handleFormState,
            }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContextProvider;
