import { Section } from "../Section/Section"


/**
 * Компонент отвечает за отображение разделов новостей. Принимает массив из разделов и рендерит их через метод map
 * @param {object[]} sections массив объектов, содержащих названия разделов новостей и ссылки на них
 * @returns 
 */

export function NewsSections(sections) {
  return (
    <>
      {sections.map(section => (
        <Section item={section}/>
      ))}
    </>
  )
}
