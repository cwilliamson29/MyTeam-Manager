import './css/App.css'
import './css/employeeList.css'
import EmployeeList from "./components/EmployeeList";
import EmployeeListTitle from "./components/EmployeeListTitle";
import {dummyData} from "./helpers/dummyData";

function App() {

    return (
        <div className="App col d-md-flex flex-md-column justify-content-between">
            <EmployeeListTitle/>
            {dummyData.map((emp, i) => {
                return <EmployeeList
                    id={i}
                    time={emp.hours}
                    days={emp.days}
                    name={emp.name}
                    email={emp.email}
                    EEID={emp.EEID}
                    meetings={emp.meetings}
                    warnings={emp.warnings}
                />
            })}
        </div>
    )
}

export default App
