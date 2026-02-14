# Tag Color Implementation Guide

## Overview
This solution implements a centralized tag color management system that automatically saves tag colors when a tag is selected or saved.

## Files Created

### 1. **`src/config/tags.js`** - Tag Configuration
- Central configuration file containing all tags with their colors
- Exports:
  - `tagConfig`: Object mapping each tag to its label and colors
  - `getTagConfig(tagName)`: Function to retrieve tag configuration
  - `getAllTags()`: Function to get all tags as an array

**Tag Mapping:**
```javascript
{
  design: { bgColor: 'bg-blue-50', textColor: 'text-blue-700' },
  operations: { bgColor: 'bg-amber-50', textColor: 'text-amber-700' },
  marketing: { bgColor: 'bg-green-50', textColor: 'text-green-700' },
  creative: { bgColor: 'bg-purple-50', textColor: 'text-purple-700' },
  development: { bgColor: 'bg-indigo-50', textColor: 'text-indigo-700' },
  backend: { bgColor: 'bg-red-50', textColor: 'text-red-700' },
  setup: { bgColor: 'bg-green-50', textColor: 'text-green-700' },
  infrastructure: { bgColor: 'bg-blue-50', textColor: 'text-blue-700' },
  documentation: { bgColor: 'bg-cyan-50', textColor: 'text-cyan-700' }
}
```

### 2. **`src/components/TagBadge.jsx`** - Reusable Tag Component
- Display tags with consistent styling
- Accepts `tagName` and optional `tagColor` object
- Automatically applies correct background and text colors

**Usage:**
```jsx
<TagBadge tagName="design" tagColor={task.tagColor} />
```

### 3. **Updated `TaskModal.jsx`**
- Now imports tag config
- `handleChange` automatically saves `tagColor` when a tag is selected
- Dynamically generates select options from tag config
- Task object now includes:
  ```javascript
  {
    tag: 'design',
    tagColor: {
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    }
  }
  ```

## Implementation Benefits

✅ **Centralized Color Management**: All colors defined in one place  
✅ **Automatic Color Saving**: Colors automatically saved with task when tag selected  
✅ **Consistency**: Use `TagBadge` component everywhere for uniform styling  
✅ **Easy Maintenance**: Change colors in one file, updates everywhere  
✅ **Reusable**: Tag configuration can be used across the entire app  

## How to Use

### In TaskModal (Already Updated)
```jsx
import { getTagConfig, getAllTags } from '../../config/tags';

// When tag is selected, color is automatically saved:
if (name === 'tag') {
  const tagData = getTagConfig(value);
  setTask((prev) => ({
    ...prev,
    tag: value,
    tagColor: {
      bgColor: tagData.bgColor,
      textColor: tagData.textColor,
    },
  }));
}
```

### In KanbanBoard or Any Other Component
Replace hardcoded tag colors with TagBadge component:

**Before:**
```jsx
<span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
  Design
</span>
```

**After:**
```jsx
import TagBadge from '../TagBadge';

<TagBadge tagName={task.tag} tagColor={task.tagColor} />
```

## Task Object Structure

Now your task object should look like:
```javascript
{
  id: 1,
  title: 'Wireframes',
  description: 'Set up high-fidelity prototypes with conditional logic',
  tag: 'design',
  tagColor: {
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700'
  },
  date: '2024-08-26',
  status: 'todo'
}
```

## Next Steps (Optional)

1. **Update KanbanBoard.jsx**: Replace all hardcoded tag colors with `<TagBadge />` component
2. **Update Filter/Sort Menus**: Use `getAllTags()` to generate filter options dynamically
3. **Add to LocalStorage**: Save task data with colors to localStorage

## Benefits of This Approach

- **DRY Principle**: Don't Repeat Yourself - colors defined once
- **Type Safety**: If using TypeScript, can create interfaces for tag config
- **Scalability**: Easy to add new tags with just one entry in config
- **Consistency**: All tags display with correct colors everywhere
- **Maintainability**: Future color changes only need to be made in one place
