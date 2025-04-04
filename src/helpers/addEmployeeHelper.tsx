import {Employee} from "../interfaces/employeeInterface";
import {db} from "./db";

export const addEmployeeHelper = (empl: Employee) => {
    const shiftStart = empl.shiftStart;
    const shiftEnd = empl.shiftEnd;
    const daysWorked = empl.daysWorked;
    const firstName = empl.firstName.toLowerCase();
    const lastName = empl.lastName.toLowerCase();
    const email = empl.email.toLowerCase();
    const EEID = empl.EEID.toLowerCase();
    const meetings = empl.meetings.toLowerCase();
    const meetingsDay = empl.meetingsDay.toLowerCase();
    const warnings = empl.warnings.toLowerCase();

    async function addEmployee() {
        try {
            // Add the new friend!
            await db.employees.add({
                shiftStart,
                shiftEnd,
                daysWorked,
                firstName,
                lastName,
                email,
                EEID,
                meetings,
                meetingsDay,
                warnings,
            });
        } catch (error) {
            if (error) throw error;
        }
    }

    return addEmployee();
};

export const updateEmployeesHelper = (empl: Employee, id: any) => {
    const shiftStart = empl.shiftStart;
    const shiftEnd = empl.shiftEnd;
    const daysWorked = empl.daysWorked;

    db.employees.update(id, {shiftStart: shiftStart, shiftEnd: shiftEnd, daysWorked: daysWorked})
}
