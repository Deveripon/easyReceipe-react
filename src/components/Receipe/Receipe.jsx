import { Link } from "react-router-dom";
import receipeData from "../../data/ReceipeData";
import axios from "axios";
import { useEffect, useState } from "react";

const Receipe = () => {
    const [receipeList, setReceipeList] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5050/receipe")
            .then((res) => {
                setReceipeList(res.data);
            })
            .catch(() => {});
    }, []);

    return (
        <>
            {receipeList.map((item, index) => {
                return (
                    <>
                        <div key={index} className="receipe-card border rounded-lg shadow h-fit">
                            <div className="receipe-img">
                                <img
                                    className="rounded-t-lg max-h-[200px] w-full object-cover"
                                    src={item.photo}
                                    alt="receipe-img"
                                />
                            </div>
                            <div className="receipe-content p-4 mb-4">
                                <h2 className="receipe-title text-[24px]">{item.name}</h2>
                                <div className="ingridients mb-4">
                                    <h3 className="text-primary text-2xl">Ingridients:</h3>
                                    <p className="text-gray-600 text-[17px] font-paragraphFont mt-2">
                                        {item.ingridients}
                                    </p>
                                    <h3 className="text-primary text-2xl mt-4">Receipe:</h3>
                                    <p className="text-gray-600 text-[17px] font-paragraphFont mt-2">
                                        {item.receipe}
                                    </p>
                                </div>
                                <Link className="primary-button py-2 px-3" to="/single/id">
                                    Show Full Receipe
                                </Link>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default Receipe;
