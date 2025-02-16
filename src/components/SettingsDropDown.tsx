import React from 'react';

interface Props {
    show: boolean;
}

function SettingsDropDown({show}: Props) {
    let hide = show ? " open" : "";
    return (
        <div className={"box dark-mode" + hide}>
            <div>Settings</div>
            <div>Settings</div>
            <div>Settings</div>
            <div>Settings</div>
            <div>Settings</div>
        </div>
    );
}

export default SettingsDropDown;