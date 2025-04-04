import {useEffect, useState} from "react";
import SelectBoxTime from "../TailwindElements/selectBox-Time.tsx";
import {days, employeeBooleanTemplate, endTimes, startTimes,} from "../../helpers/appSettings.tsx";
import CheckBox from "../TailwindElements/checkBox.tsx";
import {useEmployeeData} from "../../state/store.ts";
import {EmployeeValidation} from "../../interfaces/employeeInterface.tsx";

interface Props {
    show: string;
    tabShow: string;
    tabHide: string;
}

function EditShift({show, tabShow, tabHide}: Props) {
    const employee = useEmployeeData.use.employee();
    const setEmployee = useEmployeeData.use.setEmployee();
    const saveEmployee = useEmployeeData.use.saveEmployee();
    // @ts-ignore
    let [error, setError] = useState<EmployeeValidation>(employeeBooleanTemplate);
    const daysSliced = days.slice(0, 7);

    let [checked, setChecked] = useState({
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
    });
    let [daysWorked, setDaysWorked] = useState("-------");

    useEffect(() => {
        const days = daysWorked.split("");
        // seperator
        const s = "=";
        // If statments to change string position values based on day abbreviation and boolean
        // Sunday
        if (checked.sunday && days[0] === s) days[0] = "S";
        if (!checked.sunday) days[0] = s;
        // Monday
        if (checked.monday && days[1] === s) days[1] = "M";
        if (!checked.monday) days[1] = s;
        // Tuesday
        if (checked.tuesday && days[2] === s) days[2] = "T";
        if (!checked.tuesday) days[2] = s;
        // Wednesday
        if (checked.wednesday && days[3] === s) days[3] = "W";
        if (!checked.wednesday) days[3] = s;
        // Thursday
        if (checked.thursday && days[4] === s) days[4] = "R";
        if (!checked.thursday) days[4] = s;
        // Friday
        if (checked.friday && days[5] === s) days[5] = "F";
        if (!checked.friday) days[5] = s;
        // Sunday
        if (checked.saturday && days[6] === s) days[6] = "Y";
        if (!checked.saturday) days[6] = s;
        // Combine back to string and save
        let result = days.join("");
        setDaysWorked(result);
        //setEmployee(currentState => ({...currentState, daysWorked: result}))
        setterProp("daysWorked", result);
    }, [checked]);
    const handleCheckBox = (e: any, key: string) => {
        //Determines checked with true/false and saves to checked variable
        let day = key.toLowerCase();
        setChecked({...checked, [day]: e.target.checked});
        //setterProp("daysWorked", daysWorked)
    };
    const setterProp = (key: string, val: string) => {
        setEmployee(key, val);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        saveEmployee();
    };

    return (
        <div
            className={show === "edit-shift" ? tabShow : tabHide}
            id="edit-shift"
            role="tabpanel"
            aria-labelledby="edit-shift-tab"
        >
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="flex bg-slate-900 text-white rounded-lg mb-2 p-2">
                    <SelectBoxTime
                        name="Shift Start"
                        keyValue="shiftStart"
                        time={startTimes}
                        error={error.shiftStart}
                        // @ts-ignore
                        value={employee.shiftStart}
                        setter={setterProp}
                    />
                    <SelectBoxTime
                        name="Shift End"
                        keyValue="shiftEnd"
                        time={endTimes}
                        error={false}
                        // @ts-ignore
                        value={employee.shiftEnd}
                        setter={setterProp}
                    />

                    <fieldset className="flex">
                        <legend className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Days Worked:
                        </legend>
                        {daysSliced.map((day) => (
                            <CheckBox key={day} val={day} onChange={handleCheckBox}/>
                        ))}
                    </fieldset>
                    <button
                        type="submit"
                        className="ml-5 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditShift;
