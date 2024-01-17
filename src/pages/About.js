import "./about.css";
import { GiFlake } from 'react-icons/gi';
import Button from '@mui/material/Button';

export default function About() {
    return <div className="pagecontainer">
        <div className="aboutcontainer">
        <div className="about">
        <div className="name1">
            <h1>AYLIN MARTINEZ</h1>     
        </div>
        
        <div className="descriptiontitle">
            <h4>     Graduated from Emory University, College of Arts & Sciences '23 </h4>
        </div>

        <div className="description">
            <h4>Computer Science Major, Architectural Design Minor</h4>
        </div>

        <div className="experience">
            <h1>Experience</h1>
            <Button href="https://www.mycrescendo.org/" variant="text"
            sx={{
                width: 200,
                textAlign: 'center',
                borderRadius: 2,
                border: 1,   
                borderColor:'black',
                fontWeight: '',
                backgroundColor: 'none',
                color: 'rgb(211, 105, 156)',
                textTransform: 'none',
                marginTop: 5,
              }}
            >My Crescendo, LLC</Button>
            <p>Designed and managed the website for an association focused on enhancing professional development for Uplift Williams Preparatory High School Junior and Senior scholars. Improved user experience and aesthetics, while also offering recommendations for leading, mentoring, and recruiting professional mentors and scholar participants through digital media.</p>

            <Button href="https://github.com/josephpogue/AffirmationsApp.git" variant="text"
            sx={{
                width: 200,
                textAlign: 'center',
                borderRadius: 2,
                border: 1,   
                borderColor:'black',
                fontWeight: '',
                backgroundColor: 'none',
                color: 'rgb(211, 105, 156)',
                textTransform: 'none',
                marginTop: 5,
              }}
            >Affirmations App</Button>
            <p>Collaborated with client to design UI features and the overall appearance of an application. Played a key role in implementing code for a motivational software app enabling users to record affirmations, thoughts, and mantras, contributing to the goal of inspiring and motivating individuals.</p>

            <Button href="https://github.com/iwahju/virtualFridge.git" variant="text"
            sx={{
                width: 200,
                textAlign: 'center',
                borderRadius: 2,
                border: 1,   
                borderColor:'black',
                fontWeight: '',
                backgroundColor: 'none',
                color: 'rgb(211, 105, 156)',
                textTransform: 'none',
                marginTop: 5,
              }}
            >Virtual Fridge</Button>
            <p>Created a website aimed at reducing food waste by enabling users to track and receive reminders for purchased ingredients. Developed the interface using React, Java, HTML, and CSS, allowing users to compile grocery lists and receive recipe recommendations. Actively sought and incorporated feedback from teammates to enhance user experience and aesthetics.</p>
        </div>
     
        
        

        <div className="social">
            <Button href="https://www.linkedin.com/in/aylin-martinez-461a45134/" variant="text"
            sx={{
                width: 350,
                textAlign: 'center',
                border: 1,   
                borderRadius: 0,
                fontWeight: 'bold',
                backgroundColor: 'grey',
                color: 'black',
                borderColor: 'black',
                textTransform: 'uppercase',
              }}
            >LinkedIn</Button>

        <Button href="https://docs.google.com/document/d/1X7718Wbdyh-SFyvd64fvXBu2OGBuFQkihpC_i88Lu2Y/edit" variant="text"
            sx={{
                width: 350,
                marginTop: 3,
                textAlign: 'center',
                border: 1,   
                borderRadius: 0,
                fontWeight: 'bold',
                backgroundColor: 'rgb(211, 105, 156)',
                color: 'black',
                borderColor: 'black',
                textTransform:'uppercase',
               
              }}
            >Resume</Button>
            </div>

        
            
       
    
        </div>
        </div> 

        
    
     </div>
    
}