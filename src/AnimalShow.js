import './AnimalShow.css'

import { useState } from 'react';

import birdImage from './svg/bird.svg';
import catImage from './svg/cat.svg';
import cowImage from './svg/cow.svg';
import dogImage from './svg/dog.svg';
import gatorImage from './svg/gator.svg';
import horseImage from './svg/horse.svg';
import heart from './svg/heart.svg';

const svgMap = {
  bird: birdImage,
  cat: catImage,
  cow: cowImage,
  dog: dogImage,
  gator: gatorImage,
  horse: horseImage
};

function AnimalShow({type}) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks+1);

  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal"
        src={svgMap[type]}
        alt="animal"
        style={{width: 10 + 'vw'}}
      />
      <img className="heart"
        src={heart}
        alt="heart"
        style={{width: 10 + (10*clicks) + 'px'}}
      />
    </div>
  );
}

export default AnimalShow
