import Header from "../header";
import "../App.css";
import Homepagebuttons from "../components/frontpagebuttons";

export default function CookiesPolicyPage (){
  return (
    <div>
        <Header></Header>
        <Homepagebuttons></Homepagebuttons>
        <div class="contact">
            <h1>Contact us on email or give us a call today:</h1>
            <h3>Email:GibJohn@tutoring.co.uk</h3>
            <h3>Number:01618821234</h3>
      </div>
    </div>
  );
}