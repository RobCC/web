import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import styles from './about.scss';
import useHttp from '#/hooks/http';

import {
  counter as reduxCounter,
  results as reduxResults,
} from '../../store/ducks';

/*  eslint-disable no-console */
export const About = ({
  results, addCounter, increaseCounter, saveResult, deleteResult,
}) => {
  const [block, setBlock] = useState(false);
  const { dummyRequest, loading } = useHttp();
  const counter = useSelector((state) => reduxCounter.getCounter(state));

  const onDeleteClick = (id) => () => {
    deleteResult(id);
  };

  const onSaveClick = (n) => () => {
    saveResult(n);
  };

  const onAddMore = () => {
    addCounter(10);
  };

  const toggleBlock = () => {
    setBlock(!block);
  };

  return (
    <div>
      About page.

      <div>
        Store counter: {counter}
        <button type="button" onClick={increaseCounter}>Increase store counter</button>
        <button type="button" onClick={onAddMore}>Add more</button>

        <hr />

        <div>
          <button type="button" onClick={onSaveClick(counter)}>Save Result</button>
          <TransitionGroup component="ul" className="ul-class">
            {results && results.map((res) => (
              <CSSTransition
                key={res.id.toISOString()}
                classNames={{
                  enter: styles.itemEnter,
                  enterActive: styles.itemEnterActive,
                  exitActive: styles.itemExitActive,
                }}
                timeout={300}
              >
                <li className={styles.item}>
                  <b>Date</b>: {res.id.toString()} - <b>Counter Snapshot</b>: {res.value}
                  <button type="button" onClick={onDeleteClick(res.id)}>
                    Delete Result
                  </button>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>

        <hr />

        <div>
          <h2>React Transition Group</h2>
          <button type="button" onClick={toggleBlock}>Toggle</button>
          <Transition in={block} timeout={300}>
            {(state) => <p>{state}</p>}
          </Transition>
          <Transition
            in={block}
            timeout={300}
            mountOnEnter
            unmountOnExit
            onEnter={() => console.log('OnEnter')} // onEntering, onEntered
            onExit={() => console.log('onExit')} // onExiting, on Exited
          >
            {(state) => (
              <div
                className={styles.block}
                style={{
                  transition: 'opacity 300ms ease-out',
                  opacity: state === 'exiting' ? 0 : 1,
                }}
              />
            )}
          </Transition>

          <CSSTransition
            in={block}
            timeout={300}
            // classNames="" [className]-enter/exit[-active]
            classNames={{
              enterActive: '', // enter
              exitActive: '', // exit,
              // appear/appearActive (on 1st time)
            }}
            mountOnEnter
            unmountOnExit
          >
            <div
              className={styles.block}
              style={{
                transition: 'opacity 300ms ease-out',
              }}
            />
          </CSSTransition>
        </div>

        <div>
          Loading: {`${loading}`}
          <button type="button" onClick={() => dummyRequest()}>
            Send request
          </button>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  addCounter: PropTypes.func,
  results: PropTypes.arrayOf(PropTypes.any),
  increaseCounter: PropTypes.func,
  saveResult: PropTypes.func,
  deleteResult: PropTypes.func,
};

const mapStateToProps = (state) => ({
  results: reduxResults.getResults(state),
});

const mapDispatchToProps = {
  increaseCounter: reduxCounter.increaseCounter,
  addCounter: reduxCounter.addCounter,
  saveResult: reduxResults.saveResult,
  deleteResult: reduxResults.thunkDeleteResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
