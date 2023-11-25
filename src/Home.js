const Home = () => {

const handleClick = (e) => {
    console.log('hello beech', e);
}
const handleClickAgain =(name, e) => {
    console.log('hello' + name, e.target)
}

    return ( 
        <div className="homepage">
            <h2>homepage</h2>
            <button onClick={handleClick}>Click me</button>
                <button onClick={(e) => handleClickAgain('zoe', e)}>Click me 2</button>
        </div>
     );
}
 
export default Home;