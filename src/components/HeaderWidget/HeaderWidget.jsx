import { Widget } from "../Widget/Widget"


/**
 * Компонент отвечает за отрисовку виджета в шапке сайта. Принимает ссылку на картинку, Заголовок и текст
 * @returns 
 */
export  function HeaderWidget({headerWidget}) {
    const {title, text, img} = headerWidget
  return (
    <>
        <img src={img} alt="" className="header-img"/>
        <Widget title={title}>
          <p>{text}</p>
        </Widget>
    </>
  )
}
