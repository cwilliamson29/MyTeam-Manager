import React from "react";
import {employeeMeetings, employeeName, employeeTime} from "../interfaces/employeeInterface";

interface Props {
    time: employeeTime;
    days: string;
    name: employeeName;
    email: string;
    EEID: string;
    meetings: employeeMeetings;
}

const colorOfDay = (time: string[]) => {
    // Determining time of day for CSS coloring
    const morning = ["06", "07", "08", "09", "10"];
    const midDay = ["11", "12", "13"];
    const evening = ["14", "15", "16", "17", "18"];

    // time comes over as "12:30" and must compare the first 2 numbers only
    let t = time[0] + time[1];

    // Determines CSS return statement
    if (morning.includes(t)) {
        return "morning";
    } else if (midDay.includes(t)) {
        return "midDay";
    } else if (evening.includes(t)) {
        return "morning";
    }
};

function EmployeeList({time, days, name, email, EEID, meetings}: Props) {
    //console.log(time.start);

    return (
        <div className="row employee">
            <div className="col time">
                {time.start} - {time.end}
            </div>
            <div className="col days">{days}</div>
            <div className="col name">
                {name.first} {name.last}
            </div>
            <div className="col email">{email}</div>
            <div className="col EEID">{EEID}</div>
            <div className="col meetings">
                {meetings.when} on {meetings.onDay}
            </div>
        </div>
    );
}

export default EmployeeList;
