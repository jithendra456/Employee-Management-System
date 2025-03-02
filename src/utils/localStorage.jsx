const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Project Report Submission",
        "description": "Submit the final project report to the manager.",
        "date": "2025-03-05",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Attend a virtual meeting with the client regarding requirements.",
        "date": "2025-03-06",
        "category": "Meetings",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Code Review",
        "description": "Review the codebase and suggest improvements.",
        "date": "2025-03-04",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team Standup",
        "description": "Participate in the daily standup meeting.",
        "date": "2025-03-05",
        "category": "Meetings",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bug Fixing",
        "description": "Resolve the high-priority bugs assigned.",
        "date": "2025-03-06",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Database Backup",
        "description": "Ensure database backup is scheduled properly.",
        "date": "2025-03-05",
        "category": "Maintenance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Perform a security audit of the system.",
        "date": "2025-03-07",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Client Feedback Analysis",
        "description": "Analyze the feedback received from clients.",
        "date": "2025-03-08",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Website UI Enhancement",
        "description": "Improve the user interface based on feedback.",
        "date": "2025-03-06",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "API Development",
        "description": "Develop and test new API endpoints.",
        "date": "2025-03-07",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Marketing Strategy Planning",
        "description": "Prepare a new marketing strategy plan.",
        "date": "2025-03-08",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Social Media Campaign",
        "description": "Launch a new social media campaign.",
        "date": "2025-03-09",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Content Writing",
        "description": "Write content for the company blog.",
        "date": "2025-03-10",
        "category": "Content Creation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
}
