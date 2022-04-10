import './App.css';
import { Routes,Route } from "react-router-dom";
import SearchView from './components/searchView';
import HomeView from './components/homeView';
import Navibar from './components/navibar';
import TagManager from './components/tagManager';
import Settings from 'components/Settings';

function App() {
  return (
    <>
    <Navibar/>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="search" element={<SearchView/>} />
      <Route path="tagmanager" element={<TagManager/>} />
      <Route path="settings" element={<Settings/>} />
    </Routes>
    </>
  );
}

export default App;
