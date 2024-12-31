import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";
import styles from './home.module.css'
import AnimatedGIF from "./AnimatedGIF";
import Header from "./Header";
import Jokes from "./jokes";



const Home = () => {
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(false);




    const fetchJoke = () => {
        setLoading(true)
        axios.get('https://official-joke-api.appspot.com/jokes/random').then((response) => {
            setJoke(response.data)
        }).catch((error) => {
            console.log(error);
        })
        setLoading(false);
    };


    useEffect(()=>{
        const speak = ()=>{
            console.log(joke);
            if('speechSynthesis' in window){
                if (joke){
                    const speech = new SpeechSynthesisUtterance(`${joke.setup} ${joke.punchline}`);
                    window.speechSynthesis.speak(speech);
                }
            }
            else{
                alert(
                    'Your browser does not support text to speech'
                )
            }
        }
        speak()
    }, [joke]);



    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'j' || event.key === 'J') {
                fetchJoke();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => (
            window.removeEventListener('keydown', handleKeyPress)
        );
    }, []);


    return (
        <div className={`${styles.app} ${styles.home}`}>
            <Header />
            <AnimatedGIF link="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3pja28waHZoaDN2MnJzNzBwamdnMnUzanduejJndjA0aGZveGJ6YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7b30EbtkaMHvRgk/giphy.gif" />
            <Button onClick={fetchJoke} text={loading} />
            <Jokes content={joke} />
        </div>
    )
}

export default Home;