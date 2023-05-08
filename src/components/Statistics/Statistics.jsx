import React, { Component } from 'react';
import { Notification } from '../Notification'
import css from './Statistics.module.css'
import PropTypes from 'prop-types';

export class Statistics extends Component {

  
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    if (total > 0) {
      return (
        <ul className={css.feedback_list}>
          <li className={css.feedback_list_item}>Good: {good}</li>
          <li className={css.feedback_list_item}>Neutral: {neutral}</li>
          <li className={css.feedback_list_item}>Bad: {bad}</li>
          <li className={css.feedback_list_item}>Total: {total}</li>
          <li className={css.feedback_list_item}>Positive feedback: {positivePercentage}%</li>
        </ul>
      );
    } 
    return <Notification message="There is no feedback" />;
  }
}


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}