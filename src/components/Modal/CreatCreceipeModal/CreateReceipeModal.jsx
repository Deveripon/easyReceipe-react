import { useContext } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ModalContext } from "../../../context/ModalContext";
const CreateReceipeModal = () => {
    const { modal, handleModalClose } =
        useContext(ModalContext);
    return (
        <>
            <div
                className={`create-receipe-modal ${
                    modal || "hidden"
                } absolute z-[9999] overflow-hidden top-0 left-0 right-0 m-auto bg-slate-300 py-10`}>
                <div className="modal-wrapper w-[calc(100vw_-_5%)] md:w-[calc(100vw_-_20%)] m-auto flex justify-center items-center">
                    <div className="receipe-add-form relative w-full  md:w-[calc(100%_-_40%)] p-5 rounded-xl border">
                        <button
                            onClick={handleModalClose}
                            className="absolute text-gray-700 hover:text-red-600 hover:rotate-180 transform duration-100 text-[25px] top-4 right-4">
                            <IoCloseCircleOutline />
                        </button>
                        <form
                            action=""
                            className="flex pt-4 flex-col gap-4 ">
                            <div className="form-group w-full flex gap-1 flex-col">
                                <label
                                    htmlFor="title"
                                    className="text-gray-600">
                                    What is your Receipe
                                    name ?
                                </label>
                                <input
                                    className="w-full py-2 px-4 text-primary outline-none rounded-lg"
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Receipe Name"
                                />
                            </div>
                            <div className="form-group w-full flex gap-1 flex-col">
                                <label
                                    htmlFor="ingridients"
                                    className="text-gray-600">
                                    What ingridients need to
                                    use ?
                                </label>
                                <textarea
                                    className="w-full py-2 px-4 text-primary resize-y outline-none rounded-lg"
                                    type="text"
                                    name="ingridients"
                                    id="ingridients"
                                    rows="4"
                                    placeholder="Ingridients"
                                />
                            </div>
                            <div className="form-group w-full flex gap-1 flex-col">
                                <label
                                    htmlFor="receipe"
                                    className="text-gray-600">
                                    What is the Receipe ?
                                </label>
                                <textarea
                                    className="w-full py-2 px-4 text-primary resize-y outline-none rounded-lg"
                                    type="text"
                                    name="receipe"
                                    id="receipe"
                                    rows="6"
                                    placeholder="Receipe"
                                />
                            </div>
                            <div className="form-group w-full flex gap-1 flex-col">
                                <label
                                    htmlFor="photo"
                                    className="text-gray-600">
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
                                />
                            </div>
                            <div className="photo-preview-box flex flex-wrap gap-3 justify-start items-center">
                                <div className="item w-[32%] relative">
                                    <button className="absolute text-gray-700 hover:text-red-600 hover:rotate-180 transform duration-100 text-[25px] top-1 right-1">
                                        <IoCloseCircleOutline />
                                    </button>
                                    <img
                                        className="w-full rounded-md"
                                        src="https://c1.wallpaperflare.com/preview/286/10/558/breakfast-eggs-healthy-paleo.jpg"
                                        alt="receipe image"
                                    />
                                </div>
                                <div className="item w-[32%] relative">
                                    <button className="absolute text-gray-700 hover:text-red-600 hover:rotate-180 transform duration-100 text-[25px] top-1 right-1">
                                        <IoCloseCircleOutline />
                                    </button>
                                    <img
                                        className="w-full rounded-md"
                                        src="https://c1.wallpaperflare.com/preview/286/10/558/breakfast-eggs-healthy-paleo.jpg"
                                        alt="receipe image"
                                    />
                                </div>
                                <div className="item w-[32%] relative">
                                    <button className="absolute text-gray-700 hover:text-red-600 hover:rotate-180 transform duration-100 text-[25px] top-1 right-1">
                                        <IoCloseCircleOutline />
                                    </button>
                                    <img
                                        className="w-full rounded-md"
                                        src="https://c1.wallpaperflare.com/preview/286/10/558/breakfast-eggs-healthy-paleo.jpg"
                                        alt="receipe image"
                                    />
                                </div>
                                <div className="item w-[32%] relative">
                                    <button className="absolute text-gray-700 hover:text-red-600 hover:rotate-180 transform duration-100 text-[25px] top-1 right-1">
                                        <IoCloseCircleOutline />
                                    </button>
                                    <img
                                        className="w-full rounded-md"
                                        src="https://c1.wallpaperflare.com/preview/286/10/558/breakfast-eggs-healthy-paleo.jpg"
                                        alt="receipe image"
                                    />
                                </div>
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
