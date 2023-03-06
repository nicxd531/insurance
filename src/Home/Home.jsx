import "../styles/Home.css"
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import HomeSection5 from "./HomeSection5";
import HomeSection6 from "./HomeSection6";
import HomeSection7 from "./HomeSection7";
const Home = () => {
    // this is the main home file that contains diffrent section of the home page that makes up the page
    // each of the sections are imported here to make up home page only 
    // each file are named according to their position on the main homepage
    return ( 
        <main className="Home">
            <HomeSection1/>
            <HomeSection2/>
            <HomeSection3/>
            <HomeSection4/>
            <HomeSection5/>
            <HomeSection6/>
            <HomeSection7/>
        </main>
     );
}
 
export default Home;