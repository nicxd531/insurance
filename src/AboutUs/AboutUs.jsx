import { Box } from "@mui/material";
import AboutUsSection1 from "./AboutUsSection1";
import AboutSection2 from "./AboutSection2";
import AboutUsSection3 from "./AboutUsSection3";
import AboutUsSection4 from "./AboutUsSection4";

const AboutUs = () => {
    return ( 
        <Box sx={{p:2}} className="aboutUs">
            <AboutUsSection1/>
            <AboutSection2/>
            <AboutUsSection3/>
            <AboutUsSection4/>
        </Box>
     );
}
 
export default AboutUs;
