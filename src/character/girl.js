import React, {useState} from 'react';
import { useInterval } from '../utils';
import './styles.css';

const MAX_INDEX = 4;
const MIN_INDEX = 1;

const Girl = () => {
    const [spriteIndex, setSpriteIndex] = useState(1);
    useInterval(() => {
      if (spriteIndex === MAX_INDEX) {
        setSpriteIndex(MIN_INDEX);
      } else {
        setSpriteIndex(spriteIndex + 1);
      }
    }, 200);
    return <div className={`sprite girl girl-${spriteIndex}`}></div>
}

export default Girl;