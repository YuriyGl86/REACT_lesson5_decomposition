

/**
 * Компонент рендерит один раздел, возвращает разметку в виде ссылки на раздел с названием раздела
 * @param {object} param0 Объект, содержащий название раздела и ссылку на него
 * @returns 
 */

export  function Section({ item }) {
  return (
    <a href={item.href}>{item.title}</a>
  )
}
