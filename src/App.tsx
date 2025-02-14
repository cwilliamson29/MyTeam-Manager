import './css/App.css'
import './css/employeeList.css'
import EmployeeList from "./components/EmployeeList";
import EmployeeListTitle from "./components/EmployeeListTitle";
import {dummyData} from "./helpers/dummyData";
import React from "react";

function App() {
    let [timeReorder, setTimeReorder] = React.useState(false)
    let [nameReorder, setNameReorder] = React.useState('last')
    let [dummyList, setDummyList] = React.useState(dummyData)

    const handleSort = () => {
        setTimeReorder(!timeReorder);
        let byHours = dummyData.toSorted((a, b) => a.hours.start < b.hours.start ? -1 : 1);
        let byHoursFirstName = dummyData.toSorted((a, b) => {
            if (a.hours.start > b.hours.start) return 1;
            if (a.hours.start < b.hours.start) return -1;
            if (a.name.first > b.name.first) return 1;
            if (a.name.first < b.name.first) return -1;
        });
        let byHoursLastName = dummyData.toSorted((a, b) => {
            if (a.hours.start > b.hours.start) return 1;
            if (a.hours.start < b.hours.start) return -1;
            if (a.name.last > b.name.last) return 1;
            if (a.name.last < b.name.last) return -1;
        });

        if (timeReorder) {
            setDummyList(dummyData);
        } else if (timeReorder && nameReorder === 'first') {
            setDummyList(byHoursFirstName)
        } else if (timeReorder && nameReorder === 'last') {
            setDummyList(byHoursLastName)
        } else if (!timeReorder && nameReorder === 'first') {
            setDummyList(byHours)
        } else if (!timeReorder && nameReorder === 'last') {
            setDummyList(byHours)
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
