// Tag configuration with color mapping
export const tagConfig = {
  design: {
    label: 'Design',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  operations: {
    label: 'Operations',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700',
  },
  marketing: {
    label: 'Marketing',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
  },
  creative: {
    label: 'Creative',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
  },
  development: {
    label: 'Development',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
  },
  backend: {
    label: 'Backend',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
  },
  setup: {
    label: 'Setup',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
  },
  infrastructure: {
    label: 'Infrastructure',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  documentation: {
    label: 'Documentation',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-700',
  },
};

export const getTagConfig = (tagName) => {
  return tagConfig[tagName?.toLowerCase()] || tagConfig.design;
};

export const getAllTags = () => {
  return Object.entries(tagConfig).map(([key, value]) => ({
    value: key,
    ...value,
  }));
};
