import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './font-awesome/css/fontawesome-all.css';
import './index.css';
import './style.css';
import Student from './Pages/Student';
import Addstudent from './Pages/Addstudent';
import Editstudent from './Pages/Editstudent';
import Veiwstudent from './Pages/Viewstudent';
function App() {
  return (
    <div className="App container-fluid justify-content-center">
        <Routes>
        <Route exact path='/' element={<Student />}/>
        <Route exact path='search/:id' element={<Veiwstudent />}/>
        <Route path='add-student' element={<Addstudent />}/>
        <Route path="/edit-student/:id" element={<Editstudent />}/>
      </Routes>
    </div>
  );
}

export default App;
