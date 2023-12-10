const Subscribe = () => {
    return (
        <>
            <div className="subscribe h-full flex items-start  flex-col text-gray-600">
                <h2 className="text-primary text-2xl mb-10">
                    Subscribe
                </h2>
                <div className="input-group flex justify-center item-center">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Please enter your email"
                        className="outline-none border rounded-l-full w-[calc(100%_-_20px)] py-1 px-8 border-primary"
                    />
                    <input
                        className="bg-primary transform duration-100 py-2 px-8 rounded-r-full text-white border-2 border-primary hover:bg-primary-light"
                        type="submit"
                        value="Subscribe"
                    />
                </div>
            </div>
        </>
    );
};

export default Subscribe;
