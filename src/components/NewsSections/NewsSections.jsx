import { Section } from "../Section/Section"


/**
 * Компонент отвечает за отображение разделов новостей. Принимает массив из разделов и рендерит их через метод map
 * @param {*} sections массив объектов, содержащих названия разделов новостей и ссылки на них
 * @returns 
 */

export function NewsSections({sections, children}) {
  return (
    <div>
      {sections.map(section => 
        <Section item={section}/>
      )}
    {children}
    </div>
    
  )
}
