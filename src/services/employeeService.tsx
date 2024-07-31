// // services/employeeService.ts
// import axios from 'axios';
// import { Employee } from '../models/employeemodel';

// export const API_URL = "http://localhost:8088/api/v1"; 

// export const getEmployees = async (): Promise<Employee[]> => {
//     const response = await axios.get<Employee[]>(`${API_URL}/employees`);
//     console.log('getEmployees response:', response.data);  // Konsola yazdır
//     return response.data;
//   };

// // Belirli bir çalışanı ID ile getirme
// export const getEmployeeById = async (id: string): Promise<Employee> => {
//   const response = await axios.get<Employee>(`${API_URL}/employees/${id}`);
//   return response.data;
// };

// // Belirli bir çalışanı ID ile güncelleme
// export const updateEmployee = async (id: string, data: Partial<Employee>): Promise<Employee> => {
//   const response = await axios.put<Employee>(`${API_URL}/employees/${id}`, data);
//   return response.data;
// };

// // Belirli bir çalışanı ID ile silme
// export const deleteEmployee = async (id: string): Promise<void> => {
//   await axios.delete(`${API_URL}/employees/${id}`);
// };
