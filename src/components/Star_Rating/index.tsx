import { useState } from "react";
import Icon from "../Accordion/Icon";

interface RatingsType {
  [key: number]: string;
}

const RATINGS_TEXT: RatingsType = {
  1: "POOR",
  2: "JUST OKAY",
  3: "AVERAGE",
  4: "GOOD",
  5: "VERY GOOD",
};
const StarRating = () => {
  const numStars = [1, 2, 3, 4, 5];
  const [starsHovered, setStarsHovered] = useState(0);
  const [clicked, setClicked] = useState(0);

  const handleHover = (i: number) => {
    setStarsHovered(i);
    if (i < clicked) {
      setClicked(0);
    }
  };

  return (
    <div>
      {numStars.map((i) =>
        starsHovered >= i || clicked >= i ? (
          <Icon
            id="star-filled"
            key={i}
            width={32}
            height={32}
            fill="#eab308"
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={() => setStarsHovered(0)}
            onClick={() => setClicked(i)}
            style={{ display: "inline" }}
          />
        ) : (
          <Icon
            id="star-empty"
            key={i}
            width={32}
            height={32}
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={() => setStarsHovered(0)}
            onClick={() => setClicked(i)}
            style={{ display: "inline" }}
          />
        )
      )}

      <p>
        Your given rating is:{" "}
        {starsHovered > 0 ? RATINGS_TEXT[starsHovered] : RATINGS_TEXT[clicked]}
      </p>
    </div>
  );
};

export default StarRating;
