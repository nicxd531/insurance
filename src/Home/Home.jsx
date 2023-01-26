import "../styles/Home.css"
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
const Home = () => {
    return ( 
        <main className="Home">
            <HomeSection1/>
            <HomeSection2/>
            <HomeSection3/>
            <HomeSection4/>
        </main>
     );
}
 
export default Home;