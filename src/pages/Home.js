import "./home.css";
import { GiNestedHearts } from 'react-icons/gi';
import { GiFlake } from 'react-icons/gi';
import { GiLaserBurst } from 'react-icons/gi';
import { GiSpikes } from 'react-icons/gi';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function Home() {
    return(
<div className="wrap">

    <div className="intro">
      <h1> Hi, I'm AYLIN </h1>
    </div>

    <div class="introdescription">
    <p>Recent Computer Science graduate seeking to merge my interests in graphic and visual</p>
    <p> design through my technical and artistic skills. I am a creative and detail-oriented student  </p>   
    <p>with a passion for aesthetics eager to gain knowledge & experience in User Interface Design.</p>
    </div>



<div className="palette">
    <div className="square"></div>
    <div className="square"></div>
    <div className="square"></div>
    <div className="square"></div>
</div>


    <div className="board"></div>
    
</div>

    )  
}