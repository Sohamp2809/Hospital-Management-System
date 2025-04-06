import Biography from "../Components/Biography";
import Hero from "../Components/Hero";

const AboutUS = () => {
    return (
        <>
            <Hero title={"Explore More About US ! Soham Medicare"} imageUrl={"/about.png"}/>
            <Biography imageUrl={"./whoweare.jpg"}/>
        </>
    )
}

export default AboutUS