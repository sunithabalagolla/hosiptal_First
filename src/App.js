import logo from './logo.svg';
import './App.css';

import { HeaderComponent } from './feature/header/header';
import { AppRouter } from './router';

import { BrowserRouter} from 'react-router-dom';




function App() {

 
 
  return (
    <div >
     
     
   <BrowserRouter>
   
   
     {/* <HeaderComponent></HeaderComponent> */}
   
        <AppRouter></AppRouter>

    </BrowserRouter>

   </div>
  );
}

export default App;
