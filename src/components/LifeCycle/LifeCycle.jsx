import React from 'react';
import style from './LifeCycle.module.css';

export class LifeCycle extends React.Component {
  // !render
  // constructor
  // getDerivedStateFromProps
  // render
  // -
  // !commit
  // DOM updates
  // componentDidMount
  // componentWillUnmount

  constructor(props) {
    console.log('constructor: ');
    super(props);
    this.state = {
      field: 0,
      hasError: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: ');
    return state;
  }

  componentDidMount() {
    console.log('componentDidMount: ');
    // setInterval(() => {
    //   this.setState(state => ({
    //     field: state.field + 1,
    //   }));
    //   console.log('timer');
    // }, 3000);

    // document.addEventListener('scroll', this.handler);

    // eslint-disable-next-line react/prop-types
    document.title = this.props.prop;
  }

  // !render
  // getDerivedStateFromProps
  // shouldComponentUpdate
  // render

  // !pre-commit
  // getShapshotBeforeUpdate
  // DOM updates

  // !commit
  // componentDidUpdate

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate: ');
    return this.state !== nextState || this.props !== nextProps;
  }

  getShapshotBeforeUpdate(prevProps, prevState) {
    console.log('getShapshotBeforeUpdate: ');
    return window.pageYOffset;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: ');
    window.scrollBy(0, -snapshot);
  }

  componentWillUnmount() {
    // document.removeEventListener('scroll', this.handler);
  }

  // !error
  // getDerivedStateFromError
  // componentDidCatch

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    // sendLog(errorInfo.componentStack);
  }

  handler = () => {
    this.setState(state => ({
      field: state.field + 1,
    }));
  };

  render() {
    console.log('render: ');
    if (this.state.error) {
      return <h1 className={style.title}>Error</h1>;
    } else {
      return (
        <div>
          <h1 className={style.title}>Жизненный цикл</h1>

          <div className={style.container}>
            <div>
              <h2 className={style.title}>Типы</h2>
              <ul className={style.list}>
                <li>Монтирование</li>
                <li>Обновление</li>
                <li>Размонтирование</li>
                <li>Ошибки</li>
              </ul>
            </div>

            <div className='stage'>
              <h2 className={style.title}>Этапы</h2>
              <ul className={style.list}>
                <li>Render</li>
                <li>Pre-commit</li>
                <li>Commit</li>
              </ul>
            </div>
          </div>
          <button className={style.btn} onClick={this.handler}>Клик {this.state.field}</button>
        </div>
      );
    }
  }
}
