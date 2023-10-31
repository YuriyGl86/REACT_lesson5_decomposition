/**
 * Компонент рендерит отдельную новость в виде иконки, ссылки с заголовком.
 * @param {object} item объект, содержащий ссылку на новость, ссылку на иконку и сам текст заголовка
 * @returns 
 */

export  function NewsHeader(item) {
  return (
    <>
        <img src={item.src} alt="" />
        <a href={item.href}>{item.title}</a>
    </>
  )
}
