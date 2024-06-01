import Home from './Home';
import './App.css';
import StudentsView from './components/student/StudentsView';
import Navbar from './components/common/Navbar';
import StudentProfile from './components/student/StudentProfile';
import AddStudent from './components/student/AddStudent';
import EditStudent from './components/student/EditStudent';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

function App() {
  return (
    <main className="container mt-5">
			<Router>
				<Navbar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-students"
						element={<StudentsView />}></Route>
					<Route
						exact
						path="/add-students"
						element={<AddStudent />}></Route>
					<Route
						exact
						path="/edit-student/:id"
						element={<EditStudent />}></Route>
					<Route
						exact
						path="/student-profile/:id"
						element={<StudentProfile />}></Route>
				</Routes>
			</Router>
		</main>
  );
}

export default App;
