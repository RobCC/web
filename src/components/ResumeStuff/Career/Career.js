import React from 'react';
import PropTypes from 'prop-types';
import { v1 as generateId } from 'uuid';

import MountAnimator from '#/utils/MountAnimator';
import Section from '../Section/Section';

import styles from './career.scss';
import companies from './data';

function Career({ onScreen = false }) {
  return (
    <MountAnimator
      mount={onScreen}
      className={styles.wrapper}
      inAnimation={styles.fadeInLeft}
      outAnimation={styles.fadeOutLeft}
    >
      <Section className={styles.section} title="Career">
        {companies.map((company) => (
          <div key={generateId()} className={styles.content}>
            <div className={styles.companyTitle}>
              {company.name}
              <div className={styles.period}>
                {`${company.from}-${company.to}`}
              </div>
            </div>
            <div className={styles.position}>{company.position}</div>
            <div className={styles.description}>{company.description}</div>
          </div>
        ))}
      </Section>
    </MountAnimator>
  );
}

Career.propTypes = {
  onScreen: PropTypes.bool,
};

export default Career;
