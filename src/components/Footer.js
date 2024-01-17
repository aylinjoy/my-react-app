import "./Footer.css";
import Button from '@mui/material/Button';

export default function Footer() {
  return (
    <div className="footer">
        <div className= "footer-container">
            <div className= "row">
                <div className="col">
                    
                <Button href="https://www.instagram.com/aylin.joy/" variant="text"
                sx={{
                display: 'inline-block',
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'rgb(128, 168, 203)',
              }}
            >instagram</Button>
                </div>
                <div className="col">
                <Button href="https://www.linkedin.com/in/aylin-martinez-461a45134/" variant="text"
                sx={{
                display: 'inline-block',
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'rgb(128, 168, 203)',
              }}
            >LinkedIn</Button>
                </div>
                <div className="col">
                <Button href="https://github.com/aylinjoy" variant="text"
                sx={{
                display: 'inline-block',
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'rgb(128, 168, 203)',
              }}
            >Github</Button>
                </div>

            </div>
        </div>
    </div>
  )
}