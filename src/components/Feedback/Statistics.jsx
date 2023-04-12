import React from "react";

const Statistics = ({good, neutral, bad, onTotalFeedback, onPositiveFeedbackPercentage}) => (
    <div>
       
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {onTotalFeedback}</li>
                    <li>Positive feedback: {onPositiveFeedbackPercentage}%</li>
                    </ul>
    </div>
);

export default Statistics;