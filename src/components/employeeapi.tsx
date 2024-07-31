// // components/EmployeeController.tsx
// import React, { useState, useEffect } from 'react';
// import { getEmployees, getEmployeeById, updateEmployee, deleteEmployee } from '../services/employeeService';
// import { Employee } from '../models/employeemodel';

// const EmployeeController: React.FC = () => {
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
//   const [showActions, setShowActions] = useState(false);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     const data = await getEmployees();
//     setEmployees(data);
//   };

//   const handleSelectEmployee = async (id: string) => {
//     const employee = await getEmployeeById(id);
//     setSelectedEmployee(employee);
//     setShowActions(true);
//   };

//   const handleUpdate = async () => {
//     if (selectedEmployee) {
//       const updatedData = { ...selectedEmployee, firstname: 'Updated Name' }; // Example update
//       await updateEmployee(selectedEmployee.userUUID, updatedData);
//       fetchEmployees();
//     }
//   };

//   const handleDelete = async () => {
//     if (selectedEmployee) {
//       await deleteEmployee(selectedEmployee.userUUID);
//       setSelectedEmployee(null);
//       setShowActions(false);
//       fetchEmployees();
//     }
//   };

//   return (
//     <div className="flex">
//       {/* Employee List */}
//       <div className="w-1/3 p-4 border-r bg-gray-100">
//         <h2 className="text-xl font-bold mb-4">Employees</h2>
//         <ul>
//           {employees.map((employee) => (
//             <li key={employee.userUUID} className="mb-2">
//               <button
//                 onClick={() => handleSelectEmployee(employee.userUUID)}
//                 className="text-blue-500 hover:underline"
//               >
//                 {employee.firstname} {employee.lastname}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Action Panel */}
//       <div className="w-2/3 p-4">
//         {showActions && selectedEmployee && (
//           <div>
//             <h2 className="text-xl font-bold mb-4">
//               Actions for {selectedEmployee.firstname} {selectedEmployee.lastname}
//             </h2>
//             <div className="mb-4">
//               <button
//                 onClick={handleUpdate}
//                 className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EmployeeController;
