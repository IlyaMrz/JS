import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Wo WO Brain will detect any face on the image. Don\'t believe? Just try!'}
            </p>
            image url:
            <div className='pa4 br3 shadow-5 w-70 center Form'>
                <input className='f4 pa2 w-60 center' type='text' onChange={onInputChange} />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-gray' onClick={onSubmit}>Detect!</button>
            </div>
        </div>

    );
}

export default ImageLinkForm;