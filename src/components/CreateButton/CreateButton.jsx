import { MdPostAdd } from "react-icons/md";

const CreateButton = () => {
    return (
        <>
            <button
                className="text-white hidden fixed bottom-8  right-6 m-auto bg-primary hover:bg-primary-dark h-16 w-16 rounded-full max-md:flex justify-center items-center transform duration-200 text-2xl"
                to="#">
                <MdPostAdd />{" "}
            </button>
        </>
    );
};

export default CreateButton;
