
/**
 * Компонент рендерит типовой виджет, который много раз переиспользуется. Принимает заголовок, текстовой содержание, рендерит children
 * @param {*} param0 
 * @returns 
 */
export  function Widget({title, text, children}) {
  return (
    <div className="widget">
        <h3>{title}</h3>
        <p>{text}</p>
        {children}
    </div>
  )
}
