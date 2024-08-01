import axios from "axios";

export const EmployeeApis = {
  EmployeeDetail: async (selectedEmployee: string) => {
    return axios.get(
      `http://localhost:8088/api/v1/employees/${selectedEmployee}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  },

  EmployeeDelete: async (selectedEmployee: string) => {
    return axios.delete(
      `http://localhost:8088/api/v1/employees/${selectedEmployee}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  },
};
