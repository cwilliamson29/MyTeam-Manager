import './css/App.css'
import './css/employeeList.css'
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

function App() {
    // let employeeArray = [];
    // for (let i = 0; i < dummyData2.length; i++) {
    //     employeeArray.push(dummyData2[i])
    // }
    let [dummyList, setDummyList] = React.useState(dummyData2)
    console.log(dummyList)

    const handleSort = (sort: EmployeeSorting) => {
        let array
        if (!sort.time && sort.firstName) {
            array = sortByFirstName(dummyList);
            setDummyList(array);
        } else if (!sort.time && !sort.firstName) {
            sortByLastName(dummyList);
            setDummyList(dummyList)
        } else if (sort.time && sort.firstName) {
            sortByTimeAndName(dummyList);
            setDummyList(dummyList)
        } else if (sort.time && !sort.firstName) {
            sortByTimeAndLastName(dummyList)
            setDummyList(dummyList)
        }

    }

    return (
        <div className="App col d-md-flex flex-md-column justify-content-between">
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
                />
            })}
        </div>
    )
}

export default App;
