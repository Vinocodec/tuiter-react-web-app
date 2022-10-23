import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloWorld from './components/hello-world';
import Labs from './labs';
import Tuiter from "./components/tuiter/tuiter";
import HomeScreen from './components/tuiter/HomeScreen';
import ExploreScreen from './components/tuiter/ExploreScreen';


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello" exact={true} element={<HelloWorld/>}/>
                    <Route path="/" exact={true} element={<Labs/>}/>
                    <Route path="/tuiter" exact={true} element={<Tuiter/>}/>
                    <Route path="/tuiter/home" exact={true} element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" exact={true} element={<ExploreScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;


