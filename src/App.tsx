import './css/App.css'
import './css/employeeList.css'
import EmployeeList from "./components/EmployeeList";
import EmployeeListTitle from "./components/EmployeeListTitle";

function App() {

    let emp = {
        hours: {
            start: "08:00",
            end: "17:00",
        },
        days: "--TWRFYS",
        name: {first: "les", last: "graziano-bisnell-douchenhimen", reorder: false},
        email: "cbland@wth.com",
        EEID: "ccrcbland",
        meetings: {when: "bi-weekly", onDay: "wednesday"},
        warnings: "Written"
    };

    return (
        <div className="App col d-md-flex flex-md-column justify-content-between">
            <EmployeeListTitle/>
            <EmployeeList
                time={emp.hours}
                days={emp.days}
                name={emp.name}
                email={emp.email}
                EEID={emp.EEID}
                meetings={emp.meetings}
                warnings="none"
            />
            <EmployeeList
                time={emp.hours}
                days={emp.days}
                name={emp.name}
                email={emp.email}
                EEID={emp.EEID}
                meetings={emp.meetings}
                warnings={emp.warnings}
            />
        </div>
    )
}

export default App
