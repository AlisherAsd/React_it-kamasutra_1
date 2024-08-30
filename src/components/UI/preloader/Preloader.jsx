import React from 'react';
import preloader from '../../../assets/IMG/preloader.svg'

const Preloader = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <img src={preloader} style={{height: 200, margin: 'auto'}}/>
        </div>
    );
};

export default Preloader;