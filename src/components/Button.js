import styles from './button.module.css';

const Button = (props)=>{
    return (
       <button onClick={props.onClick} className={styles.jokeButton}>
       {props.loading ? <>loading...</> : <>Tell Me a Joke</>}
       </button>
    )
}

export default Button;