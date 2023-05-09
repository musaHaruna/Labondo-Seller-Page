import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../images/logo.png';
import { navLinks } from '../data';
const Navbar = () => {
  return (
    <nav>
      <div className='container nav'>
        <li>
          <a href='#'>
            <img src={logo} alt={logo} />
          </a>
        </li>
        <ul className='navlinks'>
          {navLinks.map((link, index) => {
            if (index === 2) {
              return (
                <li key={link.id}>
                  <a className='signUp' href='#'>
                    {link.text}
                  </a>
                </li>
              );
            }
            if (index === 3) {
              return (
                <li key={link.id}>
                  <a className='login' href='#'>
                    {link.text}
                  </a>
                </li>
              );
            }
            return (
              <li key={link.id}>
                <FaShoppingCart />
                <a href='#'>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
