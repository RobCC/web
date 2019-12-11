import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

import bouncingBall from '~/public/ae/ball.json';

import styles from './resume.scss';

const Resume = () => {
  const ballRef = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: ballRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: bouncingBall,
    });
  }, []);

  return (
    <div className={styles.wip} ref={ballRef}>
      <div>Work in progress!</div>
    </div>
  );
};

export default Resume;
