
import './App.css';
import { News } from './components/News/News';
import { HeaderWidget } from './components/HeaderWidget/HeaderWidget';
import { Logo } from './components/Logo/Logo';
import { SearchBlock } from './components/SearchBlock/SearchBlock';


const headersList = [{src:'', href:'', title:'новость номер 1'},{src:'', href:'', title:'новость номер 2'},{src:'', href:'', title:'новость номер 3'}]
const sections = [{href:'', title:'Сейчас в СМИ'},{href:'', title:'в Германии'},{href:'', title:'Рекомендуем'}]
const currencies = [{title: 'USD', value:'100', shift: '-20'}, {title: 'EUR', value:'100', shift: '+20'}]
const date = {date: '01/11/2023'}
const headerWidget = {title:'Работа над ошибками', text:'Смотрите на Яндексе и запоминайте', img:'http://nezubrilkin.su/im/img6.png'}
const logoSrc = 'https://greatgamer.ru/images/news/08.2017/22/news_8560.jpg'


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
    </div>
    </>
  );
}

export default App;
