import SectionHeader from "../SectionHeader/SectionHeader";
import SectionSubtitle from "../SectionSubtitle/SectionSubtitle";
import Partner from "./partner/Partner";

const OurPartner = () => {
    return (
        <>
            <section className="our-partners bg-white pb-14">
                <div className="container">
                    <SectionHeader title="Our Partners" />
                    <SectionSubtitle>
                        Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                    </SectionSubtitle>
                    <div className="partner-wrapper flex justify-center items-center flex-wrap w-[calc(100vw_-_40px)] xl:w-[calc(100vw_-_30%)] gap-12  m-auto">
                        <Partner img="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/chanel.png" />
                        <Partner img="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png" />
                        <Partner img="https://inkbotdesign.com/wp-content/uploads/2020/04/Coca-Cola-Logo-1934-1024x614.webp" />
                        <Partner img="https://reallygooddesigns.com/wp-content/uploads/2022/12/Famous-Store-Logos-Amazon.jpg" />
                        <Partner img="https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609424962260-L7N1N09D6QQCCDJP0JG5/Pizza-Hut-Logo-2021.jpg" />
                        <Partner img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJ3VfuqPFSnAi_NXUQw0wTPqBQsBOFF1O5Q&usqp=CAU" />
                        <Partner img="https://reallygooddesigns.com/wp-content/uploads/2022/12/Famous-Beverage-Logos-Fanta.jpg" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurPartner;
