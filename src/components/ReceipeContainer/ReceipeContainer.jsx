

const ReceipeContainer = ({ children }) => {
    return (
        <>
            <div className="receipe-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-min grid-flow-row-dense gap-9">
                {children}
            </div>
        </>
    );
};

export default ReceipeContainer;
