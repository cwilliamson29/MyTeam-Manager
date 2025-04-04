import {db} from "./db";

export async function getAllEmployees() {
    try {
        const employees = await db.employees.toArray();
        return employees
    } catch (error) {
        console.log(`Failed to get employee data: ${error}`)
        throw error
    }
}