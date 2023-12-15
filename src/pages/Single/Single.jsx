const Single = () => {
    return (
        <>
            <main className="m-auto w-[calc(80%)]">
                <div className="receipe-card p-20 rounded-lg h-fit">
                    <div className="receipe-img">
                        <img
                            className="rounded w-[calc(98%)] max-h-[60vh] m-auto object-cover"
                            src="https://images.squarespace-cdn.com/content/v1/5d5577ab9ce6c9000153aa4f/ad700fc6-04d6-49be-8005-96dc2a8ae189/Final+Dish.jpg?format=750w"
                            alt="receipe-img"
                        />
                    </div>
                    <div className="receipe-review py-5 flex justify-center items-center">
                        <div className="receipe-content p-4 mb-4 w-[60%]">
                            <h2 className="receipe-title text-[24px]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
                                laboriosam.
                            </h2>
                            <div className="ingridients mb-4">
                                <h3 className="text-primary text-2xl">Ingridients:</h3>
                                <p className="text-gray-600 text-[17px] font-paragraphFont mt-2">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Recusandae at rerum molestiae nobis adipisci natus eaque earum
                                    blanditiis enim architecto! Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Et, libero.
                                </p>
                                <h3 className="text-primary text-2xl mt-4">Receipe:</h3>
                                <p className="text-gray-600 text-[17px] font-paragraphFont mt-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                                    necessitatibus recusandae obcaecati ducimus dolorem deserunt
                                    fugit eum repudiandae, tenetur repellat quo? A exercitationem
                                    rem dolorum sed blanditiis repellendus amet. Quas facilis in
                                    beatae amet quod distinctio inventore nostrum, corporis aperiam?
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
        </>
    );
};

export default Single;
