
import './App.css';
import { News } from './components/News/News';


const headersList = [{src:'', href:'', title:'новость номер 1'},{src:'', href:'', title:'новость номер 2'},{src:'', href:'', title:'новость номер 3'}]
const sections = [{href:'', title:'Сейчас в СМИ'},{href:'', title:'в Германии'},{href:'', title:'Рекомендуем'}]
const currencies = [{title: 'USD', value:'100', shift: '-20'}, {title: 'EUR', value:'100', shift: '+20'}]
const date = {date: '01/11/2023'}


function App() {
  return (
    <>
    <div className="container">
      <div className="header-container">
        <News headersList={headersList} sections={sections} currencies={currencies} date={date}/>
      </div>
    </div>
    </>
  );
}

export default App;
