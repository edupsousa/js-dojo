import SignInOutButton from "./SignInOutButton";

function NavBar() {
  return (
    <nav className="navBar">
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
