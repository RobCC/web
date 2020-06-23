import React from 'react';
import { v1 as generateId } from 'uuid';

import styles from './career.scss';
import companies from './data';

import Section from '../Section/Section';

const Career = () => (
  <Section className={styles.wrapper} title="Career">
    {companies.map((company) => (
      <div key={generateId()} className={styles.content}>
        <div className={styles.companyTitle}>
          {company.name}
          <div className={styles.period}>
            {`${company.from}-${company.to}`}
          </div>
        </div>
        <div className={styles.position}>
          { company.position}
        </div>
        <div className={styles.description}>
          {company.description}
        </div>
      </div>
    ))}

  </Section>
);

export default Career;
