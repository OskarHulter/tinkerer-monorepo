import React from 'react';
import styles from './styles.module.scss';

export const Spacer: React.FC = ({ ...restProps }) => {
  return <div data-testid="Spacer" className={styles.Spacer} {...restProps} />;
};

export default Spacer;
