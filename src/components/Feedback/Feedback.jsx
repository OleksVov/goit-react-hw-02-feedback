import React, {Component} from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

// import PropTypes from 'prop-types';


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
        this.setState(prevState => ({neutral: prevState.neutral + 1,
        }));
      }
      handleIncrementBad = () => {
        this.setState(prevState => ({bad: prevState.bad + 1,
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
        
                <FeedbackOptions
                onIncrementGood={this.handleIncrementGood}
                onIncrementNeutral={this.handleIncrementNeutral}
                onIncrementBad={this.handleIncrementBad} />
              <h2>Statistics</h2>
                <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                onTotalFeedback={this.countTotalFeedback(good, neutral, bad)}
                onPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage(good, neutral, bad)}/>
              </Section>
            </div>
        )
      }
}

export default Feedback;