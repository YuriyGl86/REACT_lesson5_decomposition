

/**
 * компонент рендерит поисковую строку
 * @returns
 */
export  function Search() {
  return (
    <div><form>
      <input type="text" className="search-input"/>
      <button>Найти</button>
      </form>
      <span>найдется всё</span>
      </div>
  )
}
