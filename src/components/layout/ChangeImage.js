import Banner1 from "../../img/banner1.jpg";
import Banner2 from "../../img/banner2.jpg";

import styles from "./ChangeImage.module.css";
import React from "react";
import Carousel from "react-elastic-carousel";
import {Item} from "./Item.js";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

function ChangeImage() {
  return (
    <div className={styles.App}>
      <Carousel breakPoints={breakPoints}>
        <Item><img src={Banner1}alt="Banner1"></img></Item>
        <Item><img src={Banner2} alt="Banner2"></img></Item>
      </Carousel>
    </div>
  );
}

export default ChangeImage;



