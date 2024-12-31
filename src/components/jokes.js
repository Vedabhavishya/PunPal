import styles from './home.module.css';

const Jokes = (props)=>{
    return(
        <div className={`${styles.jokeContainer} ${styles.home}`}>
        {props.content.setup ? <h1>Joke:</h1>:''}
        <p className={styles.setup}>
            {props.content.setup}
            <br />
            <span className={styles.punchline}>
             {props.content.punchline}
            </span>
        </p>
        </div>
    )
}

export default Jokes;