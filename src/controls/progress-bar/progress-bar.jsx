import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./progress-bar.scss"

const ProgressBar = props => {
    // Default props
    const {
        percentage = 0,
        strokeWidth = 30,
        progressText = '',
        className = 'progress-bar',
        textColor = 'rgb(0 0 0 / 38%)',
        pathColor = `rgb(224 106 106)`,
        trailColor = '#FFF2F8',
        backgroundColor = '#fff'
    } = props;

    return (
        <div>
            <CircularProgressbar
                className={className}
                value={percentage}
                strokeWidth={strokeWidth}
                text={progressText}
                styles={buildStyles({
                    strokeLinecap: 'butt',
                    textSize: '12px',
                    pathTransitionDuration: 0.5,
                    pathColor: pathColor,
                    textColor: textColor,
                    trailColor: trailColor,
                    backgroundColor: backgroundColor,
                })}
            />
        </div>
    )
}

export default ProgressBar
