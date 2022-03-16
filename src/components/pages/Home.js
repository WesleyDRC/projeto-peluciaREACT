import ChangeImage from '../layout/ChangeImage';
import PeluciaCard from '../peluciacard/peluciaCard.js';
import styles from './Home.module.css';

function Home (){
    return(
        <section className={styles.home_container}>
            <ChangeImage />
            <PeluciaCard />
        </section>
        
    )
}


export default Home