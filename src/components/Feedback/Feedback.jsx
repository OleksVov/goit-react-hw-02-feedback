import React, {Component} from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

// import PropTypes from 'prop-types';


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      handleIncrement = (event) => {
        const value = event.target.textContent;
        this.setState(prevState => ({ [value]: prevState[value] + 1,
        }));
      }
     

      countTotalFeedback = (a, b, c) => {
       const total = a + b + c;
        return total;
      }

      countPositiveFeedbackPercentage = (a, b, c) => {
         const total = a + b + c;
        return total > 0 ? Math.round(a * 100 / total) : 0;
      }

      
      render() {
const {good} = this.state;
const {neutral} = this.state;
const {bad} = this.state;

        return (
            <div>
              <Section title="Please leave feedback">
        
                <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement} />
              <h2>Statistics</h2>

              {this.countTotalFeedback(good, neutral, bad) > 0 ? (
                <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                onTotalFeedback={this.countTotalFeedback(good, neutral, bad)}
                onPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage(good, neutral, bad)}/>
              ) : (
                <Notification message="There is no feedback"/>
              )}
               
              </Section>
            </div>
        )
      }
}

export default Feedback;