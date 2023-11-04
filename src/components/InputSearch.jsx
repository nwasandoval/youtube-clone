import "./InputSearch.css";

export function InputSearch() {
  return (
    <div className="search">
      <input type="text" placeholder="Buscar" />
      <button>
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}
