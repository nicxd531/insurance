import { Box } from "@mui/material";
import "../styles/ContactUs.css"
import ContactUsSection1 from "./ContactUsSection1";
import ContactUsSection2 from "./ContactUsSection2";
import ContactUsSection3 from "./ContactUsSection3";

const ContactUs = () => {
    // contact main component
    return ( 
        <Box className="contactUs" sx={{position:"relative"}}>
            <ContactUsSection1/>
            <ContactUsSection2/>
            <ContactUsSection3/>
        </Box>
     );
}
 
export default ContactUs;