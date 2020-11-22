import React from 'react';
import './facerecognition.css';

const Facerecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma2'>
            <div className='absolute mt2'>
                <img alt='' id='inputImage' src={imageUrl} width='800px' height='auto' />
                <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    );
}

export default Facerecognition;