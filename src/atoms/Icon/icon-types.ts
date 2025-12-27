import iconNodes from 'lucide-static/icon-nodes.json';

// Generate union type of all icon names
const iconNames = Object.keys(iconNodes).map(name => {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
});

export type IconName = typeof iconNames[number];

// Export the list for use in stories
export const allIconNames = iconNames.sort();
