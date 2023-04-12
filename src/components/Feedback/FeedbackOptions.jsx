import React from "react";
import css from './FeedbackOption.module.css';

const FeedbackOptions = ({onIncrementGood,onIncrementNeutral,onIncrementBad}) => (
    <div className={css.boxButton}>
                    <button type='button' onClick={onIncrementGood}>Good</button>
                    <button type='button' onClick={onIncrementNeutral}>Neutral</button>
                    <button type='button' onClick={onIncrementBad}>Bad</button>
                </div>
);
    

export default FeedbackOptions;