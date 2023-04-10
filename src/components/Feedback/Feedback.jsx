import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import css from './Feedback.module.css';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      handleIncrementGood = () => {
        this.setState(prevState => ({ good: prevState.good + 1,
        }));
      }
      handleIncrementNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
      }
      handleIncrementBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
           
        });
        
      }

      countTotalFeedback = () => {}
      
      render() {
const goodFeedback = this.state.good;
const neutralFeedback = this.state.neutral;
const badFeedback = this.state.bad;
const total = goodFeedback + neutralFeedback + badFeedback;

const positiveFeedback = total > 0 ? Math.round(goodFeedback * 100 / total) : 0;


        return (
            <div>
                <h1>Please leave feedback</h1>
                <div className={css.boxButton}>
                    <button type='button' onClick={this.handleIncrementGood}>Good</button>
                    <button type='button' onClick={this.handleIncrementNeutral}>Neutral</button>
                    <button type='button' onClick={this.handleIncrementBad}>Bad</button>
                </div>
                <h2>Statistics</h2>
                <ul>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive feedback: {positiveFeedback}%</li>
                    </ul>
            </div>
        )
      }
}

export default Feedback;