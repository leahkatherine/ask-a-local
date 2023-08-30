import {Container, Card, Button} from 'reactstrap';
import React from "react";



const HomePage = () => {
    return (
        <Container>
                <div style={{ color: 'white'}}>
                <h1>Hi there and welcome!</h1>
                First time here? 
                
                <br>
                </br>
                You need to locate the quiz button at the top of the page to get started, or just click below! Everything else is easy breezy!
                <br>
                </br> 
                <br>
                </br>
                <h2>About me?</h2>
                I was born and raised in Savannah, GA. With my experience in tourism and hospitality, I couldn't pass up this opportunity to shine where I'm needed. Why can't I let a little personality show through and really take the opportunity to recommend something that makes sense for someone individually?
 It all started with being a server/bartender on River Street in my early 20's, and recommending places based on my connection with the guests. Since then, I have always found myself helping Savannah's lovely visitors - no matter the position I've been in. As a former event planner from River Street, I'm ready to help you plan a fun trip! 
                <br>
                </br>
With plenty of love from your Local Bestie,
                <br>
                </br>
                Leah
                <br>
                </br>
                <br>
                </br>
                </div>
            
            <Button href='/quiz' className='quizButton' alt='quizButton'> Quiz 
            </Button>

        </Container>
    )
};

export default HomePage;