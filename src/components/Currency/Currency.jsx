import React from 'react'

/**
 * Компонент рендерит отдельную валюту
 * @param {object} currency объект с данными по валюте
 * @returns 
 */

export  function Currency(currency) {
  return (
    <div>
        {currency.titlt} {currency.valuu} {currency.shift}
    </div>
  )
}
