
/**
 * компонент отвечает за отображение банера под поисковой строкой
 * @param {*} param0 
 * @returns 
 */
export  function Baner({baner}) {
  return (
    <a href={baner.href}>
        <img src={baner.src} alt="" className="baner-img"/>
    </a>
  )
}
