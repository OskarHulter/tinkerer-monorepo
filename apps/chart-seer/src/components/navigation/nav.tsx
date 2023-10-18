import { Link } from 'react-router-dom';

export default function nav() {
  return (
    <div role='navigation'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/page-2'>Page 2</Link>
        </li>
      </ul>
    </div>
  );
}
