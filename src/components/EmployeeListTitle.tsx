import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

interface Props {
    setTimeReorder: () => void;
}

function EmployeeListTitle({setTimeReorder}: Props) {
    let [titleClick, setTitleClick] = React.useState('')

    const handleTitleclick = () => {
        if (titleClick === ' title-buttons-clicked ') {
            setTitleClick(' text-white ')
            setTimeReorder()
        } else {
            setTitleClick(' title-buttons-clicked ')
            setTimeReorder()
        }
    }
    return (
        <div
            className={"d-flex flex-row align-items-center justify-content-between bg-slate text-white title"}>
            <div className={"col flex-grow-1 h-100 time time-button " + titleClick}
                 onClick={() => handleTitleclick()}>
                Time <FontAwesomeIcon icon={faArrowDown} className={titleClick}/>
            </div>
            <div className="col-sm border-slate h-100 days">Work Days</div>
            <div className="col border-slate h-100 name">
                Name
            </div>
            <div className="col start border-slate h-100 email">Email</div>
            <div className="col border-slate h-100 EEID">EE ID</div>
            <div className="col border-slate h-100 meetings">
                Meetings
            </div>
            <div className="col h-100 border-slate titleWarnings">
                Warnings
            </div>
        </div>
    );
}

export default EmployeeListTitle;
