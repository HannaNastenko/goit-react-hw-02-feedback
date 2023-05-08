import React, { Component } from 'react';
import { Section } from '../components/Section';
import { FeedbackOptions } from '../components/FeedbackOptions';
import { Statistics } from '../components/Statistics';


export class App extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleBtnClick = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    console.log(this.state);
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentage = () => {
    const { good } = this.state;
    const total = this.countTotal();
    return good ? Math.round((good / total) * 100) : 0
  }


  render() {
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotal()}
            positivePercentage={this.countPositivePercentage()}
          />
        </Section>
        
      </>
    );
  }
}
