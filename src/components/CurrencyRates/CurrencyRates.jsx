import { Currency } from "../Currency/Currency"


/**
 * Компонент отвечает за рендеринг списка валют. Принимает массив текущих курсов и рендерит его через метод map
 * @param {*} currencies массив объектов с названиями валют, текущим курсом
 * @returns 
 */
export  function CurrencyRates(currencies) {
  return (
    <div>
        {currencies.map(currency => {
            {<Currency currency={currency}/>}
        })}
    </div>
  )
}
