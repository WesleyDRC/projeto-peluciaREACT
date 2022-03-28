import ChangeImage from '../layout/ChangeImage';
import PeluciaCard from '../PeluciaCard/PeluciaCard';
import Api from '../../services/api';
import { useEffect, useState } from "react";
import axios from "axios";

import styles from './Home.module.css';

function Home (){
    const [card, setCard] = useState([])
    useEffect(() => {
          fetch("https://9qz2iwilyc.execute-api.sa-east-1.amazonaws.com/dev/products", {
            method: "GET",
          })
            .then((response) => response.json())
            .then((data) => {
              setCard(data);
            })
            .catch((error) => console.log(error));
      });

    return(
        <>
        <ChangeImage />
        <div className={styles.container}>
            {card.length > 0 &&
                card.map( (card) => (
                    <PeluciaCard 
                    name={card.name}
                    price={card.price}
                    imageUrl={card.imageUrl}
                    size = {card.size}
                    measure={card.measure}
                    />
                ))
            }
        </div>
        </>
    )
}


export default Home;