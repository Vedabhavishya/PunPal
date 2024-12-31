import styles from './animated.module.css';


const AnimatedGIF = (props)=>{
    return(
        <img className={styles.animatedGIF} src={props.link} alt=""/>
    )
}

export default AnimatedGIF;