
import './App.css';
import { News } from './components/News/News';
import { HeaderWidget } from './components/HeaderWidget/HeaderWidget';
import { Logo } from './components/Logo/Logo';
import { SearchBlock } from './components/SearchBlock/SearchBlock';
import { Baner } from './components/Baner/Baner';
import { Widget } from './components/Widget/Widget';
import { Weather } from './components/Weather/Weather';
import { ListRenderer } from './components/ListRenderer/ListRenderer'; 

const headersList = [{src:'', href:'', title:'новость номер 1'},{src:'', href:'', title:'новость номер 2'},{src:'', href:'', title:'новость номер 3'}]
const sections = [{href:'', title:'Сейчас в СМИ'},{href:'', title:'в Германии'},{href:'', title:'Рекомендуем'}]
const currencies = [{title: 'USD', value:'100', shift: '-20'}, {title: 'EUR', value:'100', shift: '+20'}]
const date = {date: '01/11/2023'}
const headerWidget = {title:'Работа над ошибками', text:'Смотрите на Яндексе и запоминайте', img:'http://nezubrilkin.su/im/img6.png'}
const logoSrc = 'https://greatgamer.ru/images/news/08.2017/22/news_8560.jpg'
const baner = {src:'https://nashahistory.ru/sites/default/files/forsazh_1040_437.kq6ve.jpg', href:''}
const weather = {weather: '+17'}
const frequented = ['Недвижимость - о сталинках','Маркет-люстры и светильники','Авто.ру - привод 4х4 до 500 000']
const TV = ['02:00 ТНТ.Best','02:15 Джинглики','02:25 Наедине со всеми']
const air= ['Управление как искусство', 'Ночь. Мир в это время', 'Андрей возн...']


function App() {
  return (
    <>
    <div className="container">
      <div className="header-container">
        <News headersList={headersList} sections={sections} currencies={currencies} date={date}/>
        <div className="header-widget">
          <HeaderWidget headerWidget={headerWidget}/>
        </div>
      </div>

      <div className='search-container'>
        <Logo src={logoSrc}/>
        <SearchBlock/>
      </div>
      <Baner baner={baner}/>
      <div className="widget-container">
        <Widget title='Погода'>
          <Weather weather={weather}/> 
        </Widget>

        <Widget title='Посещаемое'>
          <ListRenderer list={frequented}/> 
        </Widget>

        <Widget title='Карта Германии'>
          <span>Расписания</span>
        </Widget>

        <Widget title='Телепрограмма'>
          <ListRenderer list={TV}/> 
        </Widget>

        <Widget title='Эфир'>
          <ListRenderer list={air}/> 
        </Widget>
      </div>
    </div>
    </>
  );
}

export default App;
