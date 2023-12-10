const Partner = ({ img }) => {
    return (
        <div className="partner">
            <img
                className="w-[100px] transform duration-100 hover:grayscale"
                src={img}
                alt="chefs"
            />
        </div>
    );
};

export default Partner;
