import { ServiceList } from "../ServiceList/ServiceList"
import { Search } from "../Search/Search"


const services = ['Видео', "Картинки", "Новости", "Карты", "Маркет", "Переодчик", "Эфир", "ещё"]

/**
 * Компонет рендерит весь поисковый блок: поисковую строку и список дополнительных сервисов над ней
 * @returns 
 */
export  function SearchBlock() {
  return (
    <div className="search-block">
        <ServiceList list={services}/>
        <Search/>

    </div>

  )
}
