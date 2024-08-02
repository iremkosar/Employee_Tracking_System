import axios from "axios";

export const ProjectApis = {
  ProjectDetail: async (selectedProject: string) => {
    return axios.get(
      `http://localhost:8088/api/v1/projects/${selectedProject}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  },

  ProjectAdd: async (selectedProject: string) => {
    return axios.post(
      `http://localhost:8088/api/v1/projects/${selectedProject}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  },
};
