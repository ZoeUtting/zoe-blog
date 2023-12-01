
import { useState, useEffect } from "react"
import BlogList from "./BlogList";
const Home = () => {
 const [blogs, setBlogs]= useState([ 
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
 { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
 { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }]);
 const [name, setName] =useState('Ben');
 const handleDelete = (id) =>{
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
 }
 useEffect(() => {
   console.log('use effect');
 }, [name]);

    return ( 
        <div className="homepage">
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        <div></div>
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario" )} title="Marios Stuff"/> */ }
        <button onClick={() => {
         setName('amy') 
        }}>Change Name</button>
        { name }
        </div>
     );
}
 
export default Home; 