import { ListItem } from "../ListItem/ListItem"

/**
 * Компонент отвечает за рендер списка, который в него приходит
 * @param {*} param0 
 * @returns 
 */
export  function ListRenderer( {list} ) {
  return (
    <ul className="frequentedList">
      {list.map(item=> (
        <ListItem item={item}/>
      ))}
    </ul>
  )
}
