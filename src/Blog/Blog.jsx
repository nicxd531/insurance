import BlogSection1 from "./BlogSection1";
import BlogSection2 from "./BlogSection2";
import BlogSection3 from "./BlogSection3";

const Blog = () => {
    // blog main component
    return ( 
        <main className="blog">
            <BlogSection1/>
            <BlogSection2/>
            <BlogSection3/>
        </main>
     );
}
 
export default Blog;