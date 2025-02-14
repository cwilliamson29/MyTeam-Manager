import './css/App.css'
import './css/employeeList.css'
import EmployeeList from "./components/EmployeeList";
import EmployeeListTitle from "./components/EmployeeListTitle";
import {dummyData} from "./helpers/dummyData";
import React from "react";

function App() {
    let [timeReorder, setTimeReorder] = React.useState(false)
    let [dummyList, setDummyList] = React.useState(dummyData)

    const handleSort = () => {
        setTimeReorder(!timeReorder);
        let list = dummyData.toSorted((a, b) => a.hours.start < b.hours.start ? -1 : 1);

        if (timeReorder) {
            setDummyList(dummyData);
        } else {
            setDummyList(list)
        }
    }

    return (
        <div className="App col d-md-flex flex-md-column justify-content-between">
            <EmployeeListTitle setTimeReorder={handleSort}/>
            {dummyList.map((emp, i) => {
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
