import header from "./header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEditContext } from "../../contexts/PostContext";

function Header() {
  const user = useSelector((state) => state.user);
  const users = localStorage.getItem("user");
  const { toggleHeader, toggleHeaderOnHeandler, toggleHeaderOffHeandler , toggleHeaderOutHeandler} =
    useEditContext();
  console.log('444', !user?.name, user?.name);

  return (
    <header
      className={header.header}
      style={
        !toggleHeader
          ? {}
          : { background: "rgba(0, 0, 0, 0.3)", top: "0", transition: "1s all" }
      }
    >
      {!toggleHeader && (
        <nav className={header.nav}>
          <ul className={header.navItem}>
            {users ? (
              <>
                <li onClick={toggleHeaderOffHeandler}>
                  <Link className={header.navLink} to="/pain">
                    P
                  </Link>
                </li>

                <li onClick={toggleHeaderOffHeandler}>
                  <Link className={header.navLink} to="/inspiration">
                    I
                  </Link>
                </li>

                <li onClick={toggleHeaderOffHeandler}>
                  <Link className={header.navLink} to={`/tools/${user.id}`}>
                    T
                  </Link>
                </li>
                {user.moderate || user.admin ? (
                  <li onClick={toggleHeaderOffHeandler}>
                    <Link className={header.navLink} to="/ability">
                      A
                    </Link>
                  </li>
                ) : (
                  <li onClick={toggleHeaderOnHeandler}>
                    <Link className={header.navLink} to="/">
                      A
                    </Link>
                  </li>
                )}
              </>
            ) : (
              <>
                <li onClick={toggleHeaderOnHeandler}>
                  <Link className={header.navLink} to="/">
                    P
                  </Link>
                </li>

                <li onClick={toggleHeaderOnHeandler}>
                  <Link className={header.navLink} to="/">
                    I
                  </Link>
                </li>
                <li onClick={toggleHeaderOnHeandler}>
                  <Link className={header.navLink} to="/">
                    T
                  </Link>
                </li>
                <li onClick={toggleHeaderOnHeandler}>
                  <Link className={header.navLink} to="/">
                    A
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
      <ul className={header.links}>
        <li onClick={toggleHeaderOnHeandler}>
          <Link className={header.link} to="/">
            Home
          </Link>
        </li>
        {users ? (
          <li >
            <Link  onClick={toggleHeaderOutHeandler} className={header.link} to="/logout">
              Log out
            </Link>
          </li>
        ) : (
          <>
            <li onClick={toggleHeaderOffHeandler}>
              <Link className={header.link} to="/login">
                Log in
              </Link>
            </li>
            <li onClick={toggleHeaderOffHeandler}>
              <Link className={header.link} to="/signup">
                Sign up
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
