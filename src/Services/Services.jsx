import "../styles/Services.css"
import ServicesSection1 from "./ServicesSection1";
import ServicesSetion2 from "./ServicesSection2";
import ServicesSection3 from "./ServicesSection3";

const Services = () => {

    // this contains list of Component that make up the services page 
    return (  
        <main className="services">
            <ServicesSection1/>
            <ServicesSetion2/>
            <ServicesSection3/>
        </main>
    );
}

export default Services;
