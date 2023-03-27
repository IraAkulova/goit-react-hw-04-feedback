import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <ul className={css.fedbackList}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              className={css.option}
              type="button"
              name={option}
              onClick={()=>{onLeaveFeedback(option);}}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
