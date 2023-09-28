import styles from './ui-email.module.scss';

/* eslint-disable-next-line */
export interface UiEmailProps {}

export function UiEmail(props: UiEmailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiEmail!</h1>
    </div>
  );
}

export default UiEmail;
