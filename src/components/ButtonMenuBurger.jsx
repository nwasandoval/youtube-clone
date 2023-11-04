import "./ButtonMenuBurger.css";

export function ButtonMenuBurger() {
  const handleClick = () => {
    document.body.classList.toggle("sidebar-drawer--open");
  };

  return (
    <button className="button-menu-burger" onClick={handleClick}>
      <i className="bi bi-list"></i>
    </button>
  );
}
