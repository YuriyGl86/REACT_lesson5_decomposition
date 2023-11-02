
/**
 * Компонент рендерит типовой виджет, который много раз переиспользуется. Принимает заголовок, текстовой содержание, рендерит children
 * @param {*} param0 
 * @returns 
 */
export  function Widget({title, children}) {
  return (
    <div className="widget">
        <h3>{title}</h3>
        {children}
    </div>
  )
}
