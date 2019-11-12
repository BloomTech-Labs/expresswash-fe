import React from './node_modules/react'
import ProgressBarFiller from './ProgressBarFiller.js'

const ProgressBar = (props) => {
    return (
        <div className='progress-bar'>
            <ProgressBarFiller
                percentage={props.percentage}
            />
        </div>
    )
}

export default ProgressBar