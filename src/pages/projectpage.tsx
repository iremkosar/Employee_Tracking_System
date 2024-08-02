import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EmployeeApis } from '../api/employee';
import { ProjectApis } from '../api/project';

interface Project {
    projectUUID: string;
    name: string;
    description: string;
    startDate:Date;
    deadline:Date;
    finishDate:Date;
}




const ProjectPage: React.FC = () => {
  const [project, setProject] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [projectDetail, setProjectDetail] = useState<Project | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
 

  useEffect(() => {
    axios.get('http://localhost:8088/api/v1/projects', {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        setProject(response.data);
      })
      .catch(error => {
        setError(`Error fetching data: ${error.message}`);
      });
  }, []);

  useEffect(() => {
    if (selectedProject === null) return;

    EmployeeApis.EmployeeDetail(selectedProject).then((response) => {
      setProjectDetail(response.data);
    })
    .catch(error => {
      setError(`Error fetching data: ${error.message}`);
    });

  }, [selectedProject]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedProject === null) return;
  
    ProjectApis.ProjectAdd(selectedProject)
      .then(() => {
        // Yeni projeyi listeye ekle (örnek olarak boş bir proje ekliyoruz, gerçek proje verisini almanız gerekecek)
        const newProject: Project = {
          projectUUID: selectedProject,
          name: "Yeni Proje",
          description: "Açıklama",
          startDate: new Date(),
          deadline: new Date(),
          finishDate: new Date(),
        };
  
        setProject([...project, newProject]);
        setProjectDetail(newProject); // Detayları güncelle
        setSelectedProject(null); // Seçilen projeyi sıfırla
      })
      .catch(error => {
        setError(`Error adding project: ${error.message}`);
      });
  };



  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    const newValue = type === 'date' ? new Date(value) : value;
  
    setProjectDetail((prevState) => {
      if (prevState === null) {
        // Eğer prevState null ise, gerekli tüm alanları varsayılan değerlerle tamamlayarak döndürün
        return {
          projectUUID: '',
          name: name === 'name' ? newValue as string : '',
          description: name === 'description' ? newValue as string : '',
          startDate: name === 'startDate' ? newValue as Date : undefined,
          finishDate: name === 'finishDate' ? newValue as Date : undefined,
          deadline: name === 'deadline' ? newValue as Date : undefined,
        } as Project;
      }
  
      // Eksik özellikleri tamamlayarak döndürün
      return {
        ...prevState,
        [name]: newValue,
      };
    });
  };
  
  
  
  

  return (
    <div className="p-4 flex justify-start">
      <div className="w-full max-w-md h-[90vh] overflow-y-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-4">Project List</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <ul>
          {project.map(project => (
            <button
              onClick={() => setSelectedProject(project.projectUUID)}
              key={project.projectUUID}
              className="mb-2 p-2 border border-gray-200 rounded shadow w-full flex justify-start"
            >
              <p><strong>First Name:</strong> {project.name}</p>
              <p><strong>Last Name:</strong> {project.description}</p>
              <p><strong>Date of Birth:</strong> {project.startDate.toLocaleDateString()}</p>
              <p><strong>Email:</strong> {project.finishDate.toLocaleDateString()}</p>
              <p><strong>Email:</strong> {project.deadline.toLocaleDateString()}</p>
            </button>
          ))}
        </ul>
      </div>

      

      <div className="w-full max-w-md h-[90vh] overflow-y-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white ml-4">
        <h2 className="text-xl font-bold mb-4">Project Details</h2>
        {projectDetail ? (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                value={projectDetail.name}
                // onChange={(e) => setName(e.target.value)}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                value={projectDetail.description}
                // onChange={(e) => setDesription(e.target.value)}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="text"
                id="dateOfBirth"
                value={projectDetail.startDate.toISOString().split('T')[0]}
                // onChange={(e) => setStartdate(e.target.value)}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={projectDetail.finishDate.toISOString().split('T')[0]}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={projectDetail.finishDate.toISOString().split('T')[0]}
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            {/* <div className='flex flex-row justify-center gap-4'>
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
            </div> */}
          </form>
        ) : (
          <p>Select an employee to see details.</p>
        )}
      </div>

      <div className="w-full max-w-md h-[90vh] overflow-y-auto p-4 border border-gray-300 rounded-lg shadow-lg bg-white ml-4">
    <h2 className="text-xl font-bold mb-4">Project Add</h2>
    {error && <p className="text-red-500 mb-4">{error}</p>}
    <form onSubmit={handleAdd}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name='name'
          value={projectDetail?.name || ""}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={projectDetail?.description || ""}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          value={projectDetail?.startDate ? projectDetail.startDate.toISOString().split('T')[0] : ''}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="finishDate">Finish Date</label>
        <input
          type="date"
          id="finishDate"
          value={projectDetail?.finishDate ? projectDetail.finishDate.toISOString().split('T')[0] : ''}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="deadline">Deadline</label>
        <input
          type="date"
          id="deadline"
          value={projectDetail?.deadline ? projectDetail.deadline.toISOString().split('T')[0] : ''}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Project
      </button>
    </form>
  </div>

    </div>
  );
};

export default ProjectPage;
