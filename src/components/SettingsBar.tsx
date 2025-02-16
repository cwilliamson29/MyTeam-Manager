import {faGear} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from 'react';
import SettingsDropDown from "./SettingsDropDown";
import AddEmployee from "./AddEmployee";

function SettingsBar() {
    let [settingVisible, setSettingVisible] = React.useState(false);
    let [addEmpVisible, setAddEmpVisible] = React.useState(false);

    const handleSettingClick = () => {
        setAddEmpVisible(false)
        setSettingVisible(!settingVisible)
    }
    const handleAddEmpClick = () => {
        setSettingVisible(false)
        setAddEmpVisible(!addEmpVisible)
    }
    return (
        <div className="dark-mode">
            <div className="d-flex justify-content-between pt-2 pb-2 dark-mode settings-bar">
                <div className="ps-3"><h4>MyTeam Manager</h4></div>
                <div className="align-self-center settings-icon"
                     onClick={() => handleAddEmpClick()}>
                    Add Team Member
                </div>
                <div className="pe-3 align-self-center" onClick={() => handleSettingClick()}>
                    <FontAwesomeIcon icon={faGear} className="settings-icon"/>
                </div>
            </div>
            <SettingsDropDown show={settingVisible}/>
            <AddEmployee show={addEmpVisible}/>
        </div>
    );
}

export default SettingsBar;

//  style={{height: "1.4em"}}