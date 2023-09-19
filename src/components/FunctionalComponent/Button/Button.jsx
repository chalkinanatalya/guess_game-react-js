import React, {useEffect} from 'react';
import style from './Button.module.css';

export const Button = props => {
  useEffect(() => {
    console.log('button');
    return () => {
      console.log('CWU - button');
    };
  }, []);
  return <button className={style.btn}>Угадать</button>;
};
