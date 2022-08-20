import SignInOutButton from "./SignInOutButton";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={classes.navBar}>
      <h1>JS Dojo</h1>
      <ul>
        <li>
          <button>Criar Dojo</button>
        </li>
        <li>
          <button>Ver Dojos em Andamento</button>
        </li>
      </ul>
      <SignInOutButton />
    </nav>
  );
}

export default NavBar;
