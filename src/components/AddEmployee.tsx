import React from 'react';

interface Props {
    show: boolean;
}

function AddEmployee({show}: Props) {
    let hide = show ? " open" : "";
    return (
        <div className={"box dark-mode" + hide}>
            <div>Add Employee</div>
            <div>Add Employee</div>
            <div>Add Employee</div>
            <div>Add Employee</div>
            <div>Add Employee</div>
        </div>
    );
}

export default AddEmployee;