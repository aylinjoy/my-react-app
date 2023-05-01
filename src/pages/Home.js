import "./home.css";
import { GiNestedHearts } from 'react-icons/gi';
import { GiFlake } from 'react-icons/gi';
import { GiLaserBurst } from 'react-icons/gi';
import { GiSpikes } from 'react-icons/gi';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function Home() {
    return(
<div className="wrap">
    <div className="decor">
    <GiFlake size="30px" color="white"/>
    <GiFlake color="pink"/>
    </div>
    <div className="decor2">
    <hr
        style = {{
            width:"450px",
            marginTop:"3%",

        }}
    />
    <GiFlake size="20px" color="pink" left="-30px" marginTop="3px"/>
    <hr
        style = {{
            width:"450px",
            marginTop:"3%",

        }}
    />
    </div>
    <div className="name">
    
        <h1>Hi, I'm Aylin</h1>
    </div>


    <div className="introduction">
        <p>Soon-to-be Computer Science graduate seeking to merge my interests in graphic and visual design</p>
        <p>    through my technical and artistic skills. I am a creative and detail-oriented student with a passion for</p>
        <p>    aesthetics eager to gain knowledge & experience in User Interface Design. </p>
    </div>
    <div className="name">
        <h4>2023 Vision Board</h4>
        <GiFlake size="15px" color="pink" left="-30px" />
        <GiFlake size="15px" color="pink" left="-30px" />
        <GiFlake size="15px" color="pink" left="-30px"/>
    </div>
    <div className= "vision">
    </div>
</div>

    )  
}