import Button from "./button";
import stethoscope from './assets/stethoscope.jpeg'
import bluesteth from './assets/bluesteth.jpeg'
import docsteth from './assets/docsteth.jpeg'
import tabs from './assets/tabs.jpeg'
import techmach from './assets/techmach.jpeg'
import docmask from './assets/docmask.jpeg'
import femaledoc from './assets/femaledoc.jpeg'
import techietabs from './assets/techietabs.jpeg'
import blacksteth from './assets/blacksteth.jpeg'
import gloves from './assets/gloves.jpeg'
import plain from './assets/plain5.jpg'
import blurstar from './assets/5.png'
import blurstar2 from './assets/6.png'
import stat from './assets/stat.png'
import globalstat from './assets/gobstat.png'
import Float from "./floats";

function Content() {
  return(
    <section className="content">
      <img src={plain} alt="star" className="star"/>
      <img src={plain} alt="star" className="star2"/>
      <img src={blurstar} alt="blurred star" className="blur-star"/>
      <img src={blurstar2} alt="blurred star" className="blur-star2"/>
      <div className="blur2"></div>
      <h1>Dedicated to <span>Hope</span>, Healing & Recovery</h1>
      <p>We are dedicated to providing essential healthcare treatment
         to various people in need of our assistance.
      </p>

      <div className="buttons">
        <Button text="Get started"/>
        <Button text="Learn more"/>
      </div>

      <img src={stat} alt="statististics img" className="stat-img"/>
      <img src={globalstat} alt="statististics img" className="gstat-img"/>

      <div className="content-body">
        <img src={stethoscope} alt="doctor with stethoscope"/>
        <Float size="80px" image={bluesteth} top="30px" left="-50px"/>
        <Float size="80px" image={docsteth} top="130px" left="-200px"/>
        <Float size="60px" image={techmach} top="30px" left="320px"/>
        <Float size="100px" image={techietabs} top="80px" left="450px"/>
        <Float size="30px" image={blacksteth} top="150px" left="350px"/>
        <Float size="70px" image={femaledoc} top="220px" left="210px" className="f-doc"/>
        <Float size="70px" image={tabs} top="180px" left="0px"/>
        <Float size="75px" image={gloves} top="250px" left="400px"/>
        <Float size="20px" image={docmask} top="250px" left="-100px"/>
        <div className="blur"></div>
      </div>
    </section>
  )
}

export default Content;