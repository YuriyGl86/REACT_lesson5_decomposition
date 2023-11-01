
/**
 * Компонент рендерит дату, которая приходит к нему в виде параметра.
 * @param {*} date объект, содержащий текущую дату
 * @returns 
 */
export  function Date({date}) {
  return (
    <>
    {date.date}
    </>
  )
}
