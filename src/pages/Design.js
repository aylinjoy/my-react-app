import "./design.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import "./Design1.js";
import { pink } from "@mui/material/colors";




export default function Design() {
    return(
<div className="container">
   
   <div className="header">
    <h2>Web Design</h2>
    </div>

    <div className="boxgrid">
        <div className="box">
            <div className="button">
            <Button href="https://www.mycrescendo.org/" variant="text"
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
            >Web Design</Button>
           
            </div>
        </div>

        <div className="box2">
        <div className="box-title">
          
        </div>
            <div className="button">
            <Button href="https://github.com/iwahju/virtualFridge" variant="text"
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
            >web development</Button>
            </div>
        </div>

        <div className="box3">
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
            >web design</Button>
            </div>
        </div>
    </div>
    
    <div className="header"> 
    <h2>Human Computer Interaction</h2> 
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
              }}
            >Data Visualization</Button>
            </div>
        </div>

        <div className="box6">
        <div className="box-title">
           
        </div>
            <div className="button">
            <Button variant="text" 
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
            >-</Button>
            </div>
        </div>
    </div>
</div>
    

    ) 



    
}