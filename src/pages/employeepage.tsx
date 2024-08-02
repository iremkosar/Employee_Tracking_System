import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EmployeeApis } from '../api/employee';

interface Employee {
  userUUID: string;
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  email: string;
}

const EmployeePage: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [employeeDetail, setEmployeeDetail] = useState<Employee | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:8088/api/v1/employees', {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        setError(`Error fetching data: ${error.message}`);
      });
  }, []);

  useEffect(() => {
    if (selectedEmployee === null) return;

    EmployeeApis.EmployeeDetail(selectedEmployee).then((response) => {
      setEmployeeDetail(response.data);
    })
    .catch(error => {
      setError(`Error fetching data: ${error.message}`);
    });

  }, [selectedEmployee]);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Formun varsayılan gönderimini engelle
    if (selectedEmployee === null) return;

    EmployeeApis.EmployeeDelete(selectedEmployee)
      .then(() => {
        // Silinen çalışanı listeden kaldır
        setEmployees(employees.filter(employee => employee.userUUID !== selectedEmployee));
        setEmployeeDetail(null); // Detayları temizle
        setSelectedEmployee(null); // Seçilen çalışanı sıfırla
      })
      .catch(error => {
        setError(`Error deleting data: ${error.message}`);
      });
  };

  return (
    <div className="p-4 flex justify-start">
      <div className="w-full max-w-md h-[90vh] overflow-y-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-4">Employee List</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <ul>
          {employees.map(employee => (
            <button
              onClick={() => setSelectedEmployee(employee.userUUID)}
              key={employee.userUUID}
              className="mb-2 p-2 border border-gray-200 rounded shadow w-full flex justify-start"
            >
              <p><strong>First Name:</strong> {employee.firstname}</p>
              <p><strong>Last Name:</strong> {employee.lastname}</p>
              <p><strong>Date of Birth:</strong> {employee.dateOfBirth}</p>
              <p><strong>Email:</strong> {employee.email}</p>
            </button>
          ))}
        </ul>
      </div>

      

      <div className="w-full max-w-md h-[90vh] overflow-y-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white ml-4">
        <h2 className="text-xl font-bold mb-4">Employee Details</h2>
        {employeeDetail ? (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                value={employeeDetail.firstname}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                value={employeeDetail.lastname}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="text"
                id="dateOfBirth"
                value={employeeDetail.dateOfBirth}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={employeeDetail.email}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className='flex flex-row justify-center gap-4'>
              <button
                onClick={handleDelete}
                className='bg-red-500 text-white p-2 rounded'
                type='button'
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                Delete
              </button>
            </div>
          </form>
        ) : (
          <p>Select an employee to see details.</p>
        )}
      </div>
    </div>
  );
};

export default EmployeePage;
