import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import RecipeView from './component/pages/RecipeView';
import RecipeAdd from './component/pages/RecipeAdd';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipeView' element={<RecipeView />} />
          <Route path='/recipeAdd' element={<RecipeAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
