import React from './node_modules/react';

const ProgressBarFiller = (props) => {
    return (
        <div className='filler' style={{ width: `${props.percentage}%` }}/>
    )
}

export default ProgressBarFiller