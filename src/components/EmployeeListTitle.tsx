import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {EmployeeSorting, SortClick} from "../interfaces/employeeInterface";
import {css} from "../helpers/employeeList-helpers";

interface Props {
    setTimeReorder: (sort: EmployeeSorting) => void;
}

function EmployeeListTitle({setTimeReorder}: Props) {
    // State to change CSS styles and sort, uses the SortClick interface
    let [timeClick, setTimeClick] = React.useState({css: '', sort: false})
    let [nameClick, setNameClick] = React.useState({css: ' title-buttons-clicked ', sort: true})

    const handleTimeclick = (args: SortClick) => {
        if (args.css === ' title-buttons-clicked ') {
            setTimeClick({css: args.css, sort: true})
            setTimeReorder({time: args.sort, firstName: nameClick.sort})
        } else {
            setTimeClick({css: args.css, sort: true})
            setTimeReorder({time: args.sort, firstName: nameClick.sort})
        }
    }

    const handleNameClick = (args: SortClick) => {
        console.log(args)
        if (nameClick.css === '') {
            setNameClick({css: args.css, sort: false})
            setTimeReorder({time: timeClick.sort, firstName: args.sort})
        } else {
            setNameClick({css: args.css, sort: true})
            setTimeReorder({time: timeClick.sort, firstName: args.sort})
        }
    }
    return (
        <div
            className={"d-flex flex-row align-items-center justify-content-between bg-slate text-white title"}>
            <div className={"col flex-grow-1 h-100 time time-button " + timeClick.css}
                 onClick={() => handleTimeclick({css: css(timeClick.css), sort: !timeClick.sort})}>
                Time <FontAwesomeIcon icon={faArrowDown} className={timeClick.css}/>
            </div>
            <div className="col-sm border-slate h-100 days">Work Days</div>
            <div className="col border-slate h-100 name">
                <div className="row" onClick={() => handleNameClick({css: css(nameClick.css), sort: !nameClick.sort})}>
                    <div className={"col text-align-right" + nameClick.css}>
                        <FontAwesomeIcon icon={faArrowDown} className={css(nameClick.css)}/>
                        By First
                    </div>
                    <div className={"col" + css(nameClick.css)}>
                        By Last
                        <FontAwesomeIcon icon={faArrowDown} className={css(nameClick.css)}/>
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
