import React from 'react'
import Background from './BgGas.png'
import { Link } from 'react-router-dom'
import './HeaderComponent.css'
var sectionStyle = {
     //width: "1500px",
    height: "522px",
    //opacity: 3,
    backgroundImage: `url(${Background})`,
    backgroundRepeat:"no-repeat"
  };
function HomeComponent() {
    return (
        <div>
        <section style={ sectionStyle }>
        <Link to="/customer" ><button id="bookNow"class="button button1">ORDER NOW</button></Link>
        </section>
        </div>
    )
}

export default HomeComponent