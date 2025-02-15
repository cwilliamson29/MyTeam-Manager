import React from "react";
import {colorOfDay, titleCase} from "../helpers/employeeList-helpers";
import {Employee} from "../interfaces/employeeInterface";

function EmployeeList({
                          id,
                          shiftStart,
                          shiftEnd,
                          daysWorked,
                          firstName,
                          lastName,
                          email,
                          EEID,
                          meetings,
                          meetingsDay,
                          warnings
                      }: Employee) {
    const color = colorOfDay(shiftStart)

    return (
        <div key={id}
             className={color + " d-flex flex-row align-items-center border-bottom border-dark justify-content-between employee"}>
            <div className="col flex-grow-1 h-100 time">
                {shiftStart + " - " + shiftEnd}
            </div>
            <div className={"border-" + color + " col-sm h-100 days"}>{daysWorked}</div>
            <div className={"border-" + color + " col h-100 name"}>
                {titleCase(`${firstName + " " + lastName}`)}
            </div>
            <div className={"border-" + color + " col h-100 email"}>{email}</div>
            <div className={"border-" + color + " col h-100 EEID"}>{EEID.toUpperCase()}</div>
            <div className={"border-" + color + " col h-100 meetings"}>
                {titleCase(meetings + " on " + meetingsDay)}
            </div>
            <div
                className={warnings === "none" ? "col h-100 empWarningsNONE" : "col h-100 empWarnings"}>
                {warnings.toUpperCase()}
            </div>
        </div>
    );
}

export default EmployeeList;
