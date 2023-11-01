
import { NewsSections } from '../NewsSections/NewsSections'
import { HeadersList } from '../HeadersList/HeadersList'
import { CurrencyRates } from '../CurrencyRates/CurrencyRates'
import { Date } from '../Date/Date'




/**
 * компонет отвечает за весь блок новостоей. В него входит компонет, отвечающий за разделы новостей, компонет, отвечающий за список заголовков. 
 * А так же компонент, отвечающий за текущие курсы валют и компонент текущей даты.
 * @param {object[]} headersList массив объектов, содержащик текст заголовка, ссылку на новость и ссылку на иконку
 * @param {object[]} sections  массив объектов, содержащих названия разделов новостей и ссылки на них
 * @param {object[]} currencies массив объектов, содержащих данные по валюте
 * @param {object} date объект, содержащий текущую дату
 * @returns 
 */

export function News( {headersList, sections, currencies, date}) {
  return (
    <div className="news-container">
      <NewsSections sections={sections}>
        <Date date={date}/>
      </NewsSections>
      <HeadersList list ={headersList}/>
      <CurrencyRates currencies={currencies}/>
    </div>
    

  )
}
