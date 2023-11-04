import "./SidebarDrawer.css";

import { ButtonMenuBurger } from "./ButtonMenuBurger";
import { Logo } from "./Logo";

export function SidebarDrawer() {
  return (
    <div className="sidebar-drawer">
      <div className="sidebar-drawer__body">
        <header className="sidebar-drawer__header">
          <ButtonMenuBurger />
          <Logo />
        </header>

        <div className="sidebar-drawer__content">
          <div>
            <a className="sidebar-drawer__item">
              <i className="bi bi-house-door"></i>
              <span>Inicio</span>
            </a>

            <a className="sidebar-drawer__item">
              <i className="bi bi-instagram"></i>
              <span>Shorts</span>
            </a>

            <a className="sidebar-drawer__item">
              <i className="bi bi-journal-bookmark"></i>
              <span>Subcripciones</span>
            </a>

            <a className="sidebar-drawer__item">
              <i className="bi bi-fast-forward-btn"></i>
              <span>Tú</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
