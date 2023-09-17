import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'Введите число',
      userNumber: '',
      randomNumber: Math.floor(Math.random() * this.props.max - this.props.min) +
      this.props.min,
      count: 0,
      isGuessed: false,
    };
  }

  handleSubmit = (e) => {
    if (e) e.preventDefault();
    this.setState(state => ({
      count: state.count + 1,
    }));

    this.setState(state => {
      if (!state.userNumber) return state;

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загаданного`,
        };
      }

      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загаданного`,
        };
      }

      return {
        result: `Вы угадали, загаданное число ${state.userNumber},
        попыток ${state.count}`,
        isGuessed: true,
      };
    });
  };

  handleChange = (e) => {
    this.setState((state, props) => ({
      userNumber: e.target.value
    }));
    console.log(this.state);
  };

  clearUserNumber = () => {
    this.setState({
      userNumber: '',
    });
  };

  handleGuess = (e) => {
    e.preventDefault();
    this.handleSubmit();
    this.clearUserNumber();
  };

  resetGame = () => {
    this.setState({
      result: 'Введите число',
      userNumber: '',
      randomNumber: this.generateRandomNumber(),
      count: 0,
      isGuessed: false
    });
  };

  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>
        <form className={style.form}>
          <label className={style.label} htmlFor='user_number'>
            Угадай число
          </label>
          <input className={style.input} type='number' id='user_number'
            onChange={this.handleChange} value={this.state.userNumber}/>
          <button className={style.btn} onClick={this.handleGuess}>Угадать</button>
          {this.state.isGuessed && <button className={style.btn}
            onClick={this.handleGuess}>Сыграть еще</button>}
        </form>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

