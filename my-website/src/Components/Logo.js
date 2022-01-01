import Photo from "./Photo";
import Intro from "./Intro";
import Social from "./Social";

function Logo(){
    return (
        <>
        <Photo />
        <div className="logo">
            <h1>Himanshu Sah</h1>
        </div>
        <Intro />
        <Social />
        </>
    )
}

export default Logo;