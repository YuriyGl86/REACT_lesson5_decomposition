import { ServiceItem } from "../ServiceItem/ServiceItem"

export  function ServiceList({ list }) {
  return (
    <ul className="service-list"> 
        {list.map(service=> (
            <li className="service-item">{<ServiceItem service={service}/>}</li>
        ))}
    </ul>
  )
}
