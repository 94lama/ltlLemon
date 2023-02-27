import { Outlet, Link } from "react-router-dom";

const Layout = () => {

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={handleClick('home')}>Home</Link>
          </li>
          <li>
            <Link to="/description">Description</Link>
          </li>
          <li>
            <Link to="/highlight">Highlight</Link>
          </li>
          <li>
            <Link to="#/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="#about" onClick={handleClick('about')}>About</Link>
          </li>
          <li>
            <Link to="#footer">Footer</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;