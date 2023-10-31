
import { NewsSections } from '../NewsSections/NewsSections'
import { HeadersList } from '../HeadersList/HeadersList'
import { CurrencyRates } from '../CurrencyRates/CurrencyRates'


/**
 * компонет отвечает за весь блок новостоей. В него входит компонет, отвечающий за разделы новостей, компонет, отвечающий за список заголовков. А так же компонент, отвечающий за текущие курсы валют.
 * @param {object[]} headersList массив объектов, содержащик текст заголовка, ссылку на новость и ссылку на иконку
 * @param {object[]} sections  массив объектов, содержащих названия разделов новостей и ссылки на них
 * @param {object[]} currencies массив объектов, содержащих данные по валюте
 * @returns 
 */

export function News( headersList, sections, currencies) {
  return (
    <>
        <NewsSections sections={sections} />
        <HeadersList list ={headersList}/>
        <CurrencyRates currencies={currencies}/>
    </>

  )
}
