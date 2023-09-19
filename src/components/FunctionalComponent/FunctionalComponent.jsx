import {useLayoutEffect, useMemo, useState} from 'react';
import style from './FunctionalComponent.module.css';
import PropTypes from 'prop-types';
// import {Button} from './Button/Button';

export const FunctionalComponent = ({min, max}) => {
  const [userNumber, setUserNumber] = useState('');
  const [result, setResult] = useState('Результат');
  const [count, setCount] = useState(0);
  // const [randomNumber, setRandomNumber] = useState(0);
  const [finish, setFinish] = useState(false);
  const [tempRandom, setTempRandom] = useState(0);

  // const [showButton, setShowButton] = useState(true);
  // useEffect(() => {
  //   setRandomNumber(Math.floor(Math.random() * max - min) + min);
  //   setFinish(false);
  // }, [finish]);

  const randomNumber = useMemo(() => {
    setFinish(false);
    return Math.floor(Math.random() * max - min) + min;
  }, [finish]);

  useLayoutEffect(() => {
    if (tempRandom >= 1) {
      setTempRandom(Math.random());
    } else {
      setTempRandom((prevRandom) => prevRandom + 1);
    }
  }, [tempRandom]);

  const handleSubmit = e => {
    e.preventDefault();

    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setTempRandom((prevTempRandom) => prevTempRandom + 1);

    setResult(() => {
      if (!userNumber || userNumber < min || userNumber > max) {
        return `Введите число от ${min} до ${max}`;
      }

      if (userNumber > randomNumber) {
        return `${userNumber} больше загаданного числа`;
      }

      if (userNumber < randomNumber) {
        return `${userNumber} меньше загаданного числа`;
      }

      // setShowButton(false);
      setFinish(true);
      return `Вы угадали, загаданное число ${userNumber}`;
    });
  };

  const handleChange = e => {
    setUserNumber(e.target.value);
  };

  console.log('randomNumber: ', randomNumber);

  return (
    <div className={style.game}>
      <p className={style.result}>{result}</p>
      <p className={style.result}>{tempRandom}</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor='user_number'>
      Попыток {count}
        </label>
        <input
          className={style.input}
          type='number'
          id='user_number'
          value={userNumber}
          onChange={handleChange}/>
        {/* {showButton && <Button />} */}
        <button className={style.btn}>Угадать</button>
      </form>
    </div>
  );
};

FunctionalComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
