import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Single = () => {
    const location = useLocation();
    const [data, setData] = useState({});
    useEffect(() => {
        axios
            .get("http://localhost:5050/receipe/" + location.pathname.at(-1))
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {});
    }, []);
    console.log(data);
    return (
        <>
            <main className="m-auto w-[calc(80%)]">
                <div className="receipe-card p-20 rounded-lg h-fit">
                    <div className="receipe-img">
                        <img
                            className="rounded w-[calc(98%)] max-h-[60vh] m-auto object-cover"
                            src={data.photo}
                            alt="receipe-img"
                        />
                    </div>
                    <div className="receipe-review py-5 flex justify-center items-center">
                        <div className="receipe-content p-4 mb-4 w-[60%]">
                            <h2 className="receipe-title text-[24px]">{data.name}</h2>
                            <div className="ingridients mb-4">
                                <h3 className="text-primary text-2xl">Ingridients:</h3>
                                <p className="text-gray-600 text-[17px] font-paragraphFont mt-2">
                                    {data.ingridients}
                                </p>
                                <h3 className="text-primary text-2xl mt-4">Receipe:</h3>
                                <p className="text-gray-600 text-[17px] font-paragraphFont mt-2">
                                    {data.receipe}
                                </p>
                            </div>
                        </div>
                        <div className="review-box w-[40%] flex flex-col">
                            <div className="user-card">
                                <div className="user">
                                    <img
                                        className="w-[150px] rounded-full h-[150px] object-cover object-top"
                                        src="https://babesredefined.com/wp-content/uploads/2019/08/team-member-01.jpg"
                                        alt="user image"
                                    />
                                    <h2 className="name text-[20px]">Angelina George</h2>
                                    <h3 className="title text-[17px] text-gray-700">Head Cheif</h3>
                                    <h4 className="text-[15px] ml-1 text-gray-400">
                                        - Cassiono of Amberson
                                    </h4>
                                </div>
                                <div className="follow-button">
                                    <button className="bg-gray-600 px-9 hover:bg-gray-800 transform duration-150 text-white py-2 rounded-full">
                                        Follow
                                    </button>
                                </div>
                            </div>
                            <div className="review mt-5 rounded ">
                                <textarea
                                    className="border-gray-300 border rounded outline-none p-3 text-gray-500"
                                    name="review"
                                    placeholder="Add your review"
                                    id=""
                                    cols="50"
                                    rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            ;
        </>
    );
};

export default Single;
