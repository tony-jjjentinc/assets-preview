export const formatName = (name: string): string => {
  return name.replace(/[:_]/g, ' ').toUpperCase();
};

export const formatSystemStatusName = (name: string): string => {
  return name.replace(/-/g, ' ');
};
