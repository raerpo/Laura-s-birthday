import React, {useState} from 'react';
import {useInterval} from '../../utils';

const points = ['.', '.', '.']

const Loading = () => {
    const [pointsIndex, setPointsIndex] = useState(1);
    const pointToRender = points.slice(0, pointsIndex);
    useInterval(() => {
        if (pointsIndex === points.length) {
            setPointsIndex(1);
        } else {
            setPointsIndex(pointsIndex + 1);
        }
    }, 500)
    return <p>Loading{pointToRender}</p>
}

export default Loading;
