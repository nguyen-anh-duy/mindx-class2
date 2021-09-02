// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import DemoForm from './DemoForm/DemoForm';
import QuizApp from './QuizApp/QuizApp';
import SmartPhoneStore from './smartphoneStore/SmartPhoneStore';
import StudentManagement from './StudentManagement/StudentManagement';
import TodoApp from './TodoApp/TodoApp';
import Home from './AContainer/Home';
import About from './AContainer/About';
import Dashboard from './AContainer/Dashboard';
import { NavBar } from './ALayout/NavBar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <div className="containerSwitch" >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
