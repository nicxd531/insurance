import { Box } from "@mui/material";
import OurPartnersSection1 from "./OurPartnersSection1";
import OurPartners2 from "./OurPartners2";
import OurPartners3 from "./OurPartners3";
import OurPartnersSection4 from "./OurPartnersSection4";

const OurPartners = () => {
   // Ourpartners main component
    return ( 
        <Box className="ourPartners">
           <OurPartnersSection1/>
           <OurPartners2/>
           <OurPartners3/>
           <OurPartnersSection4/>
        </Box>
     );
}
 
export default OurPartners;