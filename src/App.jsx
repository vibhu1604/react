import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [role, setRole] = useState("Dev");
  const [employees, setEmployees] = useState(
    [
      {

        name: "Vibhuti",
        role: "Front End Developer",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      },
      {
        name: "Saloni",
        role: "Lab Assistant",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
      {
        name: "Sagar",
        role: "QA",
        img: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg",
      },
      {
        name: "Dip",
        role: "Operator",
        img: "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg",
      },
      {
        name: "Jose",
        role: "Web Developer",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
      },
    ]
  );

  console.log('We re about to list the employees');
  const showEmployees = true;
  return (

    <div className="App">
      {console.log('We re in show empl')}
      {showEmployees ?
        <div className='flex flex-wrap justify-center'>
          {employees.map(
            (employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              )
            }
          )}
        </div>

        :
        <p>You can not see the employees</p>
      }
    </div>
  );
}

export default App;
