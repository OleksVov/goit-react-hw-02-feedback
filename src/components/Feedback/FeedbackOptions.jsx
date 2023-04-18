import React from "react";
import css from './FeedbackOption.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.boxButton}>
            {options.map(option => (
               <button 
               type='button' 
               key={option} 
               onClick={onLeaveFeedback}
               >{option}</button> 
            ))}
        </div>
    );
};
    

export default FeedbackOptions;