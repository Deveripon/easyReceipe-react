import { useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ModalContext } from "../../../context/ModalContext";

const CreateReceipeModal = () => {
    const { modal, handleModalClose } = useContext(ModalContext);

    const [formData, setFormData] = useState({
        name: "",
        ingridients: "",
        receipe: "",
        types: [],
        photos: [],
    });
    const handleFormData = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const [checkBox, setCheckBox] = useState([]);
    const handleCheckBox = (e) => {
        if (checkBox.includes(e.target.value)) {
            setCheckBox(checkBox.filter((item) => item !== e.target.value));
        } else {
            setCheckBox([...checkBox, e.target.value]);
        }
    };
    const [photos, setPhotos] = useState([]);
    const handlePhotoUpload = (e) => {
        setPhotos((prevState) => [...photos, ...Array.from(e.target.files)]);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        formData.photos = [...photos];
        formData.types = [...checkBox];
        console.log(formData);
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
                                <label htmlFor="receipe" className="text-gray-600">
                                    What is your receipe type?
                                </label>
                                <div className="type-wrapper border bg-white border-gray-100 rounded-md">
                                    <div className="input-group p-2">
                                        <input
                                            checked={checkBox.includes("Classic")}
                                            className="p-2"
                                            type="checkbox"
                                            name="classic"
                                            id="classic"
                                            value="Classic"
                                            onClick={handleCheckBox}
                                        />{" "}
                                        <label htmlFor="classic">Classic</label>
                                    </div>
                                    <div className="input-group p-2">
                                        <input
                                            checked={checkBox.includes("Thai")}
                                            className="p-2"
                                            type="checkbox"
                                            name="Thai"
                                            id="Thai"
                                            value="Thai"
                                            onClick={handleCheckBox}
                                        />{" "}
                                        <label htmlFor="Thai">Thai</label>
                                    </div>
                                    <div className="input-group p-2">
                                        <input
                                            checked={checkBox.includes("Italian")}
                                            className="p-2"
                                            type="checkbox"
                                            name="Italian"
                                            id="Italian"
                                            value="Italian"
                                            onClick={handleCheckBox}
                                        />{" "}
                                        <label htmlFor="Italian">Italian</label>
                                    </div>
                                    <div className="input-group p-2">
                                        <input
                                            checked={checkBox.includes("Chineese")}
                                            className="p-2"
                                            type="checkbox"
                                            name="Chineese"
                                            id="Chineese"
                                            value="Chineese"
                                            onClick={handleCheckBox}
                                        />{" "}
                                        <label htmlFor="Chineese">Chineese</label>
                                    </div>
                                    <div className="input-group p-2">
                                        <input
                                            checked={checkBox.includes("Soup")}
                                            className="p-2"
                                            type="checkbox"
                                            name="Soup"
                                            id="Soup"
                                            value="Soup"
                                            onClick={handleCheckBox}
                                        />{" "}
                                        <label htmlFor="Soup">Soup</label>
                                    </div>
                                    <div className="input-group p-2">
                                        <input
                                            checked={checkBox.includes("Vegeterian")}
                                            className="p-2"
                                            type="checkbox"
                                            name="Vegeterian"
                                            id="Vegeterian"
                                            value="Vegeterian"
                                            onClick={handleCheckBox}
                                        />{" "}
                                        <label htmlFor="Vegeterian">Vegeterian</label>
                                    </div>
                                </div>
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
                                    onChange={handlePhotoUpload}
                                />
                            </div>
                            <div className="photo-preview-box flex flex-wrap gap-3 justify-start items-center">
                                {photos.map((item, index) => {
                                    const imgUrl = URL.createObjectURL(item);
                                    return (
                                        <div
                                            key={index}
                                            className="item w-[48%] md:w-[32%] relative">
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setPhotos(
                                                        photos.filter((photo) => photo !== item)
                                                    );
                                                }}
                                                className="absolute text-white rounded-full hover:bg-gray-600  transform duration-100 text-[25px] top-1 right-1">
                                                <IoCloseOutline />
                                            </button>
                                            <img
                                                className="w-full h-[100px] md:h-[200px] object-cover object-top rounded-md"
                                                src={imgUrl}
                                                alt="receipe image"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <input
                                type="submit"
                                value="Post"
                                className=" bg-primary w-full py-2 rounded-full text-white hover:bg-primary-dark transform duration-100"></input>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateReceipeModal;
