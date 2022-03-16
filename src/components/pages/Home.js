import ChangeImage from '../layout/ChangeImage';
import PeluciaCard from '../peluciaCard/PeluciaCard.js';
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