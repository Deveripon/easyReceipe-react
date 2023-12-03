import { Link } from "react-router-dom";
import receipeData from "../../data/ReceipeData";
const Receipe = () => {
    return (
        <>
            {receipeData.map((item, index) => {
                return (
                    <>
                        <div key={index} className="receipe-card border rounded-lg shadow h-fit">
                            <div className="receipe-img">
                                <img
                                    className="rounded-t-lg max-h-[200px] w-full object-cover"
                                    src={item.image}
                                    alt="receipe-img"
                                />
                            </div>
                            <div className="receipe-content p-4 mb-4">
                                <h2 className="receipe-title text-[24px]">{item.title}</h2>
                                <div className="ingridients mb-4">
                                    <h3 className="text-primary text-2xl">Ingridients:</h3>
                                    <p className="text-gray-600 font-paragraphFont mt-5">
                                        {item.ingridents}
                                    </p>
                                </div>
                                <Link className="primary-button py-2 px-3" to="/">
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
