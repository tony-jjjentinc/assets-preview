export const formatName = (name: string): string => {
  return name.replace(/[:_]/g, ' ').toUpperCase();
};
