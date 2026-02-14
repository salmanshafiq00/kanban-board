const tasks = [
  // To-Do Column
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    title: 'Wireframes',
    description: 'Set up high-fidelity prototypes with conditional logic',
    tag: 'design',
    tagColor: {
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    date: '2024-08-26',
    status: 'todo',
    createdAt: new Date('2024-08-20'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    title: 'Data Entry',
    description: 'Data Entry Cleanup and validation',
    tag: 'operations',
    tagColor: {
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
    },
    date: '2024-08-27',
    status: 'todo',
    createdAt: new Date('2024-08-21'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    title: 'Social Media',
    description: 'Social Media Scheduling and posting',
    tag: 'marketing',
    tagColor: {
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
    },
    date: '2024-08-28',
    status: 'todo',
    createdAt: new Date('2024-08-22'),
  },

  // In Progress Column
  {
    id: '550e8400-e29b-41d4-a716-446655440004',
    title: 'Graphic Design',
    description: 'Graphic Design Edits and refinements',
    tag: 'creative',
    tagColor: {
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
    date: '2024-08-27',
    status: 'in-progress',
    createdAt: new Date('2024-08-19'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440005',
    title: 'Presentation',
    description: 'Presentation Slide Design',
    tag: 'development',
    tagColor: {
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700',
    },
    date: '2024-08-30',
    status: 'in-progress',
    createdAt: new Date('2024-08-18'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440006',
    title: 'API Integration',
    description: 'Integrate payment gateway APIs',
    tag: 'backend',
    tagColor: {
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
    },
    date: '2024-08-29',
    status: 'in-progress',
    createdAt: new Date('2024-08-17'),
  },

  // Done Column
  {
    id: '550e8400-e29b-41d4-a716-446655440007',
    title: 'Software Installation',
    description: 'Install and configure development tools',
    tag: 'setup',
    tagColor: {
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
    },
    date: '2024-08-23',
    status: 'done',
    createdAt: new Date('2024-08-15'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440008',
    title: 'Database Design',
    description: 'Database schema and optimization',
    tag: 'infrastructure',
    tagColor: {
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    date: '2024-08-24',
    status: 'done',
    createdAt: new Date('2024-08-14'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440009',
    title: 'Documentation',
    description: 'Complete API documentation',
    tag: 'documentation',
    tagColor: {
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-700',
    },
    date: '2024-08-25',
    status: 'done',
    createdAt: new Date('2024-08-13'),
  },
];

const getAllTasks = () => {
  return tasks;
}

const getAllTodoTasks = () => {
  return tasks.filter(task => task.status === 'todo');
}

const getAllInProgressTasks = () => {
  return tasks.filter(task => task.status === 'in-progress');
}

const getAllDoneTasks = () => {
  return tasks.filter(task => task.status === 'done');
}

export { getAllTasks, getAllTodoTasks, getAllInProgressTasks, getAllDoneTasks, tasks };