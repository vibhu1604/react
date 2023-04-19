
import './App.css';
import Employee from './components/Employee';

function App() {
  console.log('We re about to list the employees');
  const showEmployees = true;
  return (

    <div className="App">
      {console.log('We re in show empl')}
      {showEmployees ?
        <div>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </div>
        :
        <p>You can not see the employees</p>
      }
    </div>
  );
}

export default App;
