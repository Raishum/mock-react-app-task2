import Header from "../header";
import Gibjohnpicture from "../components/homepageimage";
import Homepagebuttons from "../components/frontpagebuttons";

export default function Home(){
    return(
        <>
            <div>
                <Header></Header>
                <Gibjohnpicture></Gibjohnpicture>
                <Homepagebuttons></Homepagebuttons>
            </div>
        </>
    )
}