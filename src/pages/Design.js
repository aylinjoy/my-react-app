import "./design.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import "./Design1.js";
import { pink } from "@mui/material/colors";
import { GiFlake } from 'react-icons/gi';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>


export default function Design() {
    return(
<div className="container">
<div className="decor3">
    <hr  
        style = {{
            width:"350px",
            marginTop:"5%",

        }}
    />
    <GiFlake size="20px" color="pink" left="-30px" marginTop="3px"/>
    <hr  
        style = {{
            width:"350px",
            marginTop:"5%",

        }}
    />
   </div>
   <div className="header">
    <h2>My Work</h2>
    </div>

   <div className="sub">
        <p>Below are some of my previous projects in HCI.</p>
        <p>Click on the buttons to take a closer look at my design process!</p>
   </div>

    
    <div className="header2"> 
    <h2>Human Computer Interaction</h2> 
        <GiFlake size="15px" color="pink" left="-30px" />
        <GiFlake size="15px" color="pink" left="-30px" />
        <GiFlake size="15px" color="pink" left="-30px"/>
    </div>


    <div className="boxgrid">
        <div className="box4">
        <div className="box-title">
           
        </div>
            <div className="button">
            <Button href= "https://medium.com/@amart98/design-for-another-world-ar-t-gallery-281db3caffb8" variant="text"
            sx={{
                width: 200,
                display: 'inline-block',
                textAlign: 'center',
                border: 2,
                borderRadius: 5,
                fontWeight: 'bold',
                backgroundColor: '',
                color: 'white',
                borderColor: 'rgb(233, 180, 213)',
                textTransform: 'lowercase',
              }}
            >virtual reality</Button>
            </div>
            
        </div>

        <div className="box5">
        <div className="box-title">
           
        </div>
            <div className="button">
            <Button href="https://medium.com/@amart98/ufo-sightings-8fa43c69191b" variant="text"
            sx={{
                width: 200,
                display: 'inline-block',
                textAlign: 'center',
                border: 2,
                borderRadius: 5,
                fontWeight: 'bold',
                backgroundColor: '',
                color: 'white',
                borderColor: 'rgb(233, 180, 213)',
                textTransform: 'lowercase',
              }}
            >Data Visualization</Button>
            </div>
        </div>

    <div className="box6">
        <div className="box-title">
           
        </div>
            <div className="button">
            <Button href="https://medium.com/@amart98/design-for-dimensions-emory-cs-department-website-makeover-6d8d7530442c" variant="text" 
            sx={{
                width: 200,
                display: 'inline-block',
                textAlign: 'center',
                border: 2,
                borderRadius: 5,
                fontWeight: 'bold',
                backgroundColor: '',
                color: 'white',
                borderColor: 'rgb(233, 180, 213)',
                textTransform: 'lowercase',
              }}
            >design for dimensions</Button>
            </div>
        </div>
    </div>


    <div className="boxgrid">
        <div className="box">
            <div className="button">
            <Button href="https://medium.com/@amart98/motivation-fa5a6bb6e519" variant="text"
            sx={{
                width: 200,
                display: 'inline-block',
                textAlign: 'center',
                border: 2,
                borderRadius: 5,
                fontWeight: 'bold',
                backgroundColor: '',
                color: 'white',
                borderColor: 'rgb(233, 180, 213)',
                textTransform: 'lowercase',
              }}
            >health design</Button>
           
            </div>
        </div>

        <div className="box2">
        <div className="box-title">
          
        </div>
            <div className="button">
            <Button href="https://medium.com/@amart98/handicap-accessibility-on-the-emory-university-campus-7d4f01e1434e" variant="text"
            sx={{
                width: 200,
                display: 'inline-block',
                textAlign: 'center',
                border: 2,
                borderRadius: 5,
                fontWeight: 'bold',
                backgroundColor: '',
                color: 'white',
                borderColor: 'rgb(233, 180, 213)',
                textTransform: 'lowercase',
              }}
            >accessibility routes</Button>
            </div>
        </div>

        <div className="box3">
        <div className="box-title">
          
        </div>
            <div className="button">
            <Button href="https://medium.com/@amart98/redesign-extend-dooleybot-cb92603ae553" variant="text"
            sx={{
                width: 200,
                display: 'inline-block',
                textAlign: 'center',
                border: 2,
                borderRadius: 5,
                fontWeight: 'bold',
                backgroundColor: '',
                color: 'white',
                borderColor: 'rgb(233, 180, 213)',
                textTransform: 'lowercase',
              }}
            >re-design and extend</Button>
            </div>
        </div>
    </div>

    </div>
    

    ) 



    
}