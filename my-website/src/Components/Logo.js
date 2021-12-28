import Photo from "./Photo";
import Intro from "./Intro";

function Logo(){
    return (
        <>
        <Photo />
        <div className="logo">
            <h1>Himanshu Sah</h1>
        </div>
        <Intro />
        </>
    )
}

export default Logo;