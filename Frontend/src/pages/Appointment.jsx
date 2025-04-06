import AppoinmentForm from "../Components/AppoinmentForm";
import Hero from "../Components/Hero";

const Appoinment = () => {
    return (
        <>
        <Hero title={"Schedule Your Appoinment ! SOHAM MEDICARE"} imageUrl={"./signin.png"}/>

        <AppoinmentForm/>

        </>
    );
};

export default Appoinment