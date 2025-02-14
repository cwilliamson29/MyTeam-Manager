import React from "react";
import {employeeMeetings, employeeName, employeeTime} from "../interfaces/employeeInterface";
import {colorOfDay, titleCase} from "../helpers/employeeList-helpers";

interface Props {
    time: employeeTime;
    days: string;
    name: employeeName;
    email: string;
    EEID: string;
    meetings: employeeMeetings;
    warnings: string;
}

function EmployeeList({time, days, name, email, EEID, meetings, warnings}: Props) {
    const color = colorOfDay(time.start)

    return (
        <div
            className={color + " d-flex flex-row align-items-center border-bottom border-dark justify-content-between employee"}>
            <div className="col flex-grow-1 h-100 time">
                {time.start + " - " + time.end}
            </div>
            <div className="col-sm border-start border-warning h-100 days">{days}</div>
            <div className="col border-start border-warning h-100 name">
                {titleCase(`${name.first + " " + name.last}`)}
            </div>
            <div className="col border-start border-warning h-100 email">{email}</div>
            <div className="col border-start border-warning h-100 EEID">{EEID.toUpperCase()}</div>
            <div className="col border-start border-warning h-100 meetings">
                {titleCase(meetings.when + " on " + meetings.onDay)}
            </div>
            <div
                className={warnings === "none" ? "col h-100 empWarnings text-danger" : "col h-100 empWarnings bg-danger"}>
                {warnings.toUpperCase()}
            </div>
        </div>
    );
}

export default EmployeeList;
