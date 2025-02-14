import React from "react";

function EmployeeListTitle() {
    return (
        <div
            className={"d-flex flex-row align-items-center border-bottom border-dark justify-content-between bg-black text-white title"}>
            <div className="col flex-grow-1 h-100 time">
                Time
            </div>
            <div className="col-sm border-start border-white h-100 days">Work Days</div>
            <div className="col border-start border-white h-100 name">
                Name
            </div>
            <div className="col border-start border-white h-100 email">Email</div>
            <div className="col border-start border-white h-100 EEID">EE ID</div>
            <div className="col border-start border-white h-100 meetings">
                Meetings
            </div>
            <div className="col h-100 border-start border-white empWarnings">
                Warnings
            </div>
        </div>
    );
}

export default EmployeeListTitle;
