
import { useState } from "react"
const Home = () => {
const[name, setName] = useState('MARIO');
const handleClick = () => {
    setName('zoe');
}
const handleClickAgain =(name, e) => {
    console.log('hello' + name, e.target)
}

    return ( 
        <div className="homepage">
            <h2>homepage</h2>
            { name }
            <button onClick={handleClick}>Click me</button>
                <button onClick={(e) => handleClickAgain('zoe', e)}>Click me 2</button>
        </div>
     );
}
 
export default Home;