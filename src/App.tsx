import './css/App.css'
import './css/employeeList.css'
import EmployeeList from "./components/EmployeeList";
import EmployeeListTitle from "./components/EmployeeListTitle";
import {dummyData2} from "./helpers/dummyData";
import React from "react";
import {EmployeeSorting} from "./interfaces/employeeInterface";

function App() {
    let employeeArray = [];
    for (let i = 0; i < dummyData2.length; i++) {
        employeeArray.push(dummyData2[i])
    }
    console.log(employeeArray)

    let [timeReorder, setTimeReorder] = React.useState(false)
    let [nameReorder, setNameReorder] = React.useState(false)
    let [dummyList, setDummyList] = React.useState(dummyData2)


    const handleSort = (sort: EmployeeSorting) => {
        setTimeReorder(sort.time)
        setNameReorder(sort.firstName)

        if (sort.time) {
            employeeArray.sort((a, b) => {
                if (a.shiftStart > b.shiftStart) return 1;
                if (a.shiftStart < b.shiftStart) return -1;
                return 0;
            });
            setDummyList(employeeArray);
        } else if (sort.time && sort.firstName) {
            employeeArray.sort((a, b) => {
                if (a.shiftStart > b.shiftStart) return 1;
                if (a.shiftStart < b.shiftStart) return -1;
                if (a.firstName > b.firstName) return 1;
                if (a.firstName < b.firstName) return -1;
                return 0;
            });

            setDummyList(employeeArray)
        } else if (timeReorder && !nameReorder) {
            employeeArray.sort((a, b) => {
                if (a.shiftStart > b.shiftStart) return 1;
                if (a.shiftStart < b.shiftStart) return -1;
                if (a.lastName > b.lastName) return 1;
                if (a.lastName < b.lastName) return -1;
                return 0;
            });
            setDummyList(employeeArray)
        } else if (!timeReorder && nameReorder) {
            setDummyList(employeeArray)
        } else if (!timeReorder && !nameReorder) {
            setDummyList(employeeArray)
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
                    days={emp.daysWorked}
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
