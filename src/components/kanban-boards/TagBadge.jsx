import { getTagConfig } from '../../data/tags';

function TagBadge({ tagName, tagColor }) {
  const colorData = tagColor || getTagConfig(tagName);
  const config = getTagConfig(tagName);
  
  return (
    <span
      className={`inline-block px-2.5 py-1 ${colorData.bgColor} ${colorData.textColor} text-xs font-medium rounded`}
    >
      {config.label}
    </span>
  );
}

export default TagBadge;
