import SectionHeader from "../SectionHeader/SectionHeader";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import ReceipeContainer from "../ReceipeContainer/ReceipeContainer";
import Receipe from "../Receipe/Receipe";

const AllReceipe = () => {
    return (
        <>
            <div className="container pb-20">
                <SectionHeader title="All Receipies" />
                <SectionSubtitle>
                    Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Perspiciatis,
                    doloribus quaerat! Dolore tenetur animi
                    iusto
                </SectionSubtitle>
                <ReceipeContainer>
                    <Receipe />
                </ReceipeContainer>
            </div>
        </>
    );
};

export default AllReceipe;
