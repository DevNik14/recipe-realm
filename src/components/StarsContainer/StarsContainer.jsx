import { useState } from "react";;
import Star from "../Star/Star";
import styles from './StarsContainer.module.css';

const StarsContainer = () => {
  const [showStars, setShowStars] = useState(5);
  const [stars, setStars] = useState(showStars);
  const [starIndex, setStarIndex] = useState(-1);

  const ratingHandler = (index, e) => {
    setStarIndex(oldIndex => index)
  }

  return (
    <ul className={`${styles.starsContainer}`}>
      {Array.from({ length: stars }, (_, index) => (
        <Star key={index} ratingHandler={ratingHandler.bind(null, index)} selectedStarIndex={starIndex} currentStarIndex={index} />
      ))}
    </ul>
  )
}

export default StarsContainer;