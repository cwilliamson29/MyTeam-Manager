import './css/App.css'
import EmployeeList from "./components/EmployeeList";

function App() {
    
    let emp = {
        hours: {
            start: "08:00",
            end: "17:00",
        },
        days: "--TWRFYS",
        name: {first: "Cat", last: "Bland", reorder: false},
        email: "cbland@wth.com",
        EEID: "ccrcbland",
        meetings: {when: "weekly", onDay: "friday"},
    };

    return (
        <div className="App">
            <EmployeeList
                time={emp.hours}
                days={emp.days}
                name={emp.name}
                email={emp.email}
                EEID={emp.EEID}
                meetings={emp.meetings}
            />
        </div>
    )
}

export default App
