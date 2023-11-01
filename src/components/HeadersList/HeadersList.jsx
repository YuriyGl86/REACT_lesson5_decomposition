import { NewsHeader } from "../NewsHeader/NewsHeader"


/**
 * Отвечает за рендеринг списка заголовков новостей. Получает массив и рендерит каждый заголовок через метод map.
 * @param {object[]} list Массив объектов, содержащих заголовок, ссылку на новость, ссылку на иконку источника новости.
 * @returns 
 */
export  function HeadersList({list}) {
  return (
    <ul className="headers-list">
        {list.map(header => (
        <NewsHeader item={header}/>
        ))}
      
    </ul>
    
  )
}
