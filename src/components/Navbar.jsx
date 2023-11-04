import "./Navbar.css";
import { Logo } from "./Logo";
import { ButtonMenuBurger } from "./ButtonMenuBurger";
import { InputSearch } from "./InputSearch";

export function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <ButtonMenuBurger />
        <Logo />
      </div>

      <InputSearch />

      <div>Perfil</div>
    </nav>
  );
}
