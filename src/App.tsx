import './css/App.css'
import './css/employeeList.css'
import './css/settingsBar.css'
import EmployeeList from "./components/EmployeeList";
import EmployeeListTitle from "./components/EmployeeListTitle";
import {dummyData2} from "./helpers/dummyData";
import React from "react";
import {EmployeeSorting} from "./interfaces/employeeInterface";
import {
    sortByFirstName,
    sortByLastName,
    sortByTimeAndLastName,
    sortByTimeAndName
} from "./helpers/employeeList-helpers";
import SettingsBar from "./components/SettingsBar";

function App() {
    let employeeArray = [];
    for (let i = 0; i < dummyData2.length; i++) {
        employeeArray.push(dummyData2[i])
    }
    let [dummyList, setDummyList] = React.useState(dummyData2);
    let [nameSort, setNameSort] = React.useState(false);
    //console.log(dummyList)

    const handleSort = (sort: EmployeeSorting) => {
        if (!sort.time && sort.firstName) {
            setNameSort(sort.firstName);
            sortByFirstName(employeeArray);
            setDummyList(employeeArray);
        } else if (!sort.time && !sort.firstName) {
            setNameSort(sort.firstName);
            sortByLastName(employeeArray);
            setDummyList(employeeArray)
        } else if (sort.time && sort.firstName) {
            setNameSort(sort.firstName);
            sortByTimeAndName(employeeArray);
            setDummyList(employeeArray)
        } else if (sort.time && !sort.firstName) {
            setNameSort(sort.firstName);
            sortByTimeAndLastName(employeeArray)
            setDummyList(employeeArray)
        }

    }

    return (
        <div className="App col d-md-flex flex-md-column justify-content-between">
            <SettingsBar/>
            <EmployeeListTitle setTimeReorder={handleSort}/>
            {dummyList.map((emp, i) => {
                return <EmployeeList
                    id={i}
                    shiftStart={emp.shiftStart}
                    shiftEnd={emp.shiftEnd}
                    daysWorked={emp.daysWorked}
                    firstName={emp.firstName}
                    lastName={emp.lastName}
                    email={emp.email}
                    EEID={emp.EEID}
                    meetings={emp.meetings}
                    meetingsDay={emp.meetingsDay}
                    warnings={emp.warnings}
                    nameSort={nameSort}
                />
            })}
        </div>
    )
}

export default App;
