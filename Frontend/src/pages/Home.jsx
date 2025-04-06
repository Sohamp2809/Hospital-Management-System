import Hero from "../Components/Hero";
import Biography from "../Components/Biography";
import Departments from "../Components/Department"; 
import MessageForm from "../Components/MessageForm";

const Home = () => {
    return <>

    <Hero title={"Welcome to Soham Medical Website | Your Trusted Website for Hospital Management"} imageUrl = {"/hero.png"}/>
    <Biography imageUrl={"/about.png"}/>
    <Departments/>
    <MessageForm/>

    </>
    
}

export default Home