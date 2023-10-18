// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

import { UiShared } from '@tinkerer/ui-shared';

export function App() {
  return (
    <div>
      <NxWelcome title='faustian-seeker' />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role='navigation'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/ui-shared'>UiShared</Link>
          </li>
          <li>
            <Link to='/page-2'>Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              This is the generated root route.{' '}
              <Link to='/page-2'>Click here for page 2.</Link>
            </div>
          }
        />
        <Route path='/ui-shared' element={<UiShared />} />
        <Route
          path='/page-2'
          element={
            <div>
              <Link to='/'>Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
