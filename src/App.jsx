import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Vibhuti",
        role: "Front End Developer",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      },
      {
        id: 2,
        name: "Saloni",
        role: "Lab Assistant",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
      {
        id: 3,
        name: "Sagar",
        role: "QA",
        img: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg",
      },
      {
        id: 4,
        name: "Dip",
        role: "Operator",
        img: "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg",
      },
      {
        id: 5,
        name: "Jose",
        role: "Web Developer",
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
      },
    ]
  );

  function updateEmployee(id, newName, newRole) {

    const updatedEmployees = employees.map(
      (employee) => {
        if (id == employee.id) {
          return { ...employee, name: newName, role: newRole }
        }
        return employee;
      }
    );
    setEmployees(updatedEmployees);

  }
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
                  id={employee.id}
                  key={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
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
