import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import RecipeAdd from './component/pages/RecipeAdd';
import RecipeView from './component/pages/RecipeView';
import RecipeEdit from './component/pages/RecipeEdit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/RecipeAdd' element={<RecipeAdd />} />
          <Route path='/RecipeView/:id' element={<RecipeView />} />
          <Route path='/RecipeEdit/:id' element={<RecipeEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
