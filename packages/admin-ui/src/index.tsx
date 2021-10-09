import { render } from 'react-dom';
import React from 'react';
import App from 'App';
import './app.scss';
import styles from './index.module.scss';
import classnames from 'classnames';
import { Global } from '@emotion/react';
import { globalStyles } from 'styles/globalStyles';
import {Box} from '@shared/ui-components';

render(
  <App
    className={styles.redTitle}
    userName={'Hello'}
    style={{ margin: 20, border: '1px solid black' }}
  >
    <Global styles={globalStyles}></Global>
    <Box className="green-title">Green</Box>
    <Box className={classnames(styles.redTitle, styles.bigFont)}>Red</Box>
    <Box className={classnames(styles.redTitle, styles.bigFont)}>I'm Red from Box component</Box>
  </App>,
  document.getElementById('root'),
);
