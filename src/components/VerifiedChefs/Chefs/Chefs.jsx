const Chefs = ({ img }) => {
    return (
        <div className="chefs">
            <img
                className="rounded-full  ring-primary ring-2 ring-offset-4 object-cover object-top h-[100px] w-[100px] transform duration-100 hover:grayscale"
                src={img}
                alt="chefs"
            />
        </div>
    );
};

export default Chefs;
