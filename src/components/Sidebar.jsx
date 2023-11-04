import "./Sidebar.css";

export function Sidebar() {
  return (
    <div className="sidebar">
      <a className="sidebar__item">
        <i className="bi bi-house-door"></i>
        <span>Inicio</span>
      </a>

      <a className="sidebar__item">
        <i className="bi bi-instagram"></i>
        <span>Shorts</span>
      </a>

      <a className="sidebar__item">
        <i className="bi bi-journal-bookmark"></i>
        <span>Subcripciones</span>
      </a>

      <a className="sidebar__item">
        <i className="bi bi-fast-forward-btn"></i>
        <span>Tú</span>
      </a>
    </div>
  );
}
