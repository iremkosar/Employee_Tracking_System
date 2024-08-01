import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Employee {
  userUUID: string;
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

const EmployeePage: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:8088/api/v1/employees',{
      headers:{
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        console.log(response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(`Error fetching data: ${error.message}`);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {employees.map(employee => (
          <li key={employee.userUUID} className="mb-2 p-2 border rounded shadow">
            <p><strong>First Name:</strong> {employee.firstname}</p>
            <p><strong>Last Name:</strong> {employee.lastname}</p>
            <p><strong>Date of Birth:</strong> {employee.dateOfBirth}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Created At:</strong> {employee.createdAt}</p>
            <p><strong>Updated At:</strong> {employee.updatedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeePage;
