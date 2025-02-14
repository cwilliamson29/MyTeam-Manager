import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

interface Props {
    setTimeReorder: () => void;
}

function EmployeeListTitle({setTimeReorder}: Props) {
    let [titleClick, setTitleClick] = React.useState('')
    let [nameClick, setNameClick] = React.useState(false)
    let [firstNameClick, setFirstNameClick] = React.useState('');
    let [lastNameClick, setLastNameClick] = React.useState('');

    const handleTitleclick = () => {
        if (titleClick === ' title-buttons-clicked ') {
            setTitleClick(' text-white ')
            setTimeReorder()
        } else {
            setTitleClick(' title-buttons-clicked ')
            setTimeReorder()
        }
    }
    const handleNameClick = () => {
        if (nameClick) {
            setFirstNameClick(' text-white ');
            setLastNameClick(' title-buttons-clicked ');
            setNameClick(!nameClick)
        } else {
            setLastNameClick(' text-white ');
            setFirstNameClick(' title-buttons-clicked ');
            setNameClick(!nameClick)
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
                <div className="row">
                    <div className={"col text-align-right" + firstNameClick} onClick={() => handleNameClick()}>
                        <FontAwesomeIcon icon={faArrowDown} className={firstNameClick}/>
                        By First
                    </div>
                    <div className={"col" + lastNameClick} onClick={() => handleNameClick()}>
                        By Last
                        <FontAwesomeIcon icon={faArrowDown} className={lastNameClick}/>
                    </div>
                </div>

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
