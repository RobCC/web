import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { v1 as generateId } from 'uuid';
import PropTypes from 'prop-types';

import styles from './career.scss';
import companies from './data';

import Section from '../Section/Section';

const Career = ({ onScreen }) => {
  const [currentCompany, setCompany] = useState(null);

  const onCompanyClick = useCallback((selectedCompany) => () => {
    if (currentCompany === selectedCompany) {
      return setCompany(null);
    }

    return setCompany(selectedCompany);
  }, [currentCompany]);

  return (
    <Section className={styles.wrapper}>
      <div className={styles.title}>Careers</div>
      <div className={styles.companies}>
        {companies.map((company) => (
          <button
            key={generateId()}
            type="button"
            className={styles.company}
            onClick={onCompanyClick(company)}
            style={{
              background: currentCompany === company ? company.color : 'transparent',
            }}
          >{company.name}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.companyTitle}>
          {currentCompany ? currentCompany.name : '<company name>'}
        </div>
        <div className={styles.period}>
          {currentCompany ? `${currentCompany.from}-${currentCompany.to}` : '<period>'}
        </div>
        <div className={styles.position}>
          {currentCompany ? currentCompany.position : '<position>'}
        </div>
        <div className={styles.description}>
          {currentCompany ? currentCompany.description : '<description>'}
        </div>
      </div>
    </Section>
  );
};

Career.propTypes = {
  onScreen: PropTypes.bool,
};

export default Career;
