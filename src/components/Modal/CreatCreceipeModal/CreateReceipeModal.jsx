import { useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ModalContext } from "../../../context/ModalContext";
import toast from "react-hot-toast";
const CreateReceipeModal = () => {
    const { modal, handleModalClose } = useContext(ModalContext);

    const [receipePhoto, setReceipePhoto] = useState([]);
    const handleReceipePhoto = (e) => {
        setReceipePhoto((prevState) => [...prevState, ...Array.from(e.target.files)]);
    };

    const handlePhotoRemove = (item) => {
        const newPhotos = receipePhoto.filter((file) => file !== item);
        setReceipePhoto(newPhotos);
    };

    const [formData, setFormData] = useState({
        name: "",
        ingridients: "",
        receipe: "",
        photos: [],
    });
    const handleFormData = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Receipe added successfully");
    };

    return (
        <>
            <div
                className={`create-receipe-modal ${
                    modal || "hidden"
                } absolute z-[9999] overflow-hidden min-h-screen top-0 left-0 right-0 m-auto bg-slate-300 py-10`}>
                <div className="modal-wrapper w-[calc(100vw_-_5%)] md:w-[calc(100vw_-_20%)] m-auto flex justify-center items-center">
                    <div className="receipe-add-form relative w-full  md:w-[calc(100%_-_40%)] p-5 rounded-xl border">
                        <button
                            onClick={handleModalClose}
                            className="absolute text-gray-600 rounded-full hover:bg-gray-600 hover:text-white transform duration-100 text-[25px] top-4 right-4">
                            <IoCloseOutline />
                        </button>
                        <form
                            action=""
                            onSubmit={handleFormSubmit}
                            className="flex pt-4 flex-col gap-4 ">
                            <div className="form-group w-full flex gap-1 flex-col">
                                <label htmlFor="name" className="text-gray-600">
                                    What is your Receipe name ?
                                </label>
                                <input
                                    className="w-full py-2 px-4 text-primary outline-none rounded-lg"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Receipe Name"
                                    value={formData.name}
                                    onChange={handleFormData}
                                />
                            </div>
                            <div className="form-group w-full flex gap-1 flex-col">
                                <label htmlFor="ingridients" className="text-gray-600">
                                    What ingridients need to use ?
                                </label>
                                <textarea
                                    className="w-full py-2 px-4 text-primary resize-y outline-none rounded-lg"
                                    type="text"
                                    name="ingridients"
                                    id="ingridients"
                                    rows="4"
                                    placeholder="Ingridients"
                                    value={formData.ingridients}
                                    onChange={handleFormData}
                                />
                            </div>
                            <div className="form-group w-full flex gap-1 flex-col">
                                <label htmlFor="receipe" className="text-gray-600">
                                    What is the Receipe ?
                                </label>
                                <textarea
                                    className="w-full py-2 px-4 text-primary resize-y outline-none rounded-lg"
                                    type="text"
                                    name="receipe"
                                    id="receipe"
                                    rows="6"
                                    placeholder="Receipe"
                                    value={formData.receipe}
                                    onChange={handleFormData}
                                />
                            </div>
                            <div className="form-group w-full flex gap-1 flex-col">
                                <label htmlFor="photo" className="text-gray-600">
                                    Attach Receipe Photo
                                </label>
                                <input
                                    className="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-violet-50 file:text-primary
                                    hover:file:bg-violet-100"
                                    type="file"
                                    name="photo"
                                    id="photo"
                                    multiple
                                    onChange={handleReceipePhoto}
                                />
                            </div>
                            <div className="photo-preview-box flex flex-wrap gap-3 justify-start items-center">
                                {receipePhoto.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="item w-[48%] md:w-[32%] relative">
                                            <button
                                                onClick={() => handlePhotoRemove(item)}
                                                className="absolute text-white rounded-full hover:bg-gray-600  transform duration-100 text-[25px] top-1 right-1">
                                                <IoCloseOutline />
                                            </button>
                                            <img
                                                className="w-full h-[100px] md:h-[200px] object-cover object-top rounded-md"
                                                src={URL.createObjectURL(item)}
                                                alt="receipe image"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <button
                                type="submit"
                                className=" bg-primary w-full py-2 rounded-full text-white hover:bg-primary-dark transform duration-100">
                                Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateReceipeModal;
