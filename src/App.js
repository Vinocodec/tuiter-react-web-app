import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloWorld from './labs/a6/hello-world';
import Labs from './labs';
import HomeScreen from './components/tuiter/HomeScreen';
import ExploreScreen from './components/tuiter/ExploreScreen';
import Tuiter from './components/tuiter';
import ProfileScreen from './components/tuiter/ProfileScreen';
import ProfileEditScreen from './components/tuiter/ProfileEditScreen';
import Assignment7 from "./labs/a7";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
            <Route path="/">
              <Route index
                     element={<Labs/>}/>
              <Route path="/a7"
                     element={<Assignment7/>}/>
              <Route path="/hello"
                     element={<HelloWorld/>}/>
              <Route path="tuiter" element={<Tuiter/>}>
                <Route index element={<HomeScreen/>}/>
                <Route path="explore" element={<ExploreScreen/>}/>
                <Route path="profile">
                  <Route index element={<ProfileScreen/>}/>
                  <Route path="edit" element={<ProfileEditScreen/>}/>
                </Route>
              </Route>
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
