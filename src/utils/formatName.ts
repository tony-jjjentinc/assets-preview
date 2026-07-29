export const formatName = (name: string): string => {
  return name.replace(/[:_]/g, ' ').toUpperCase();
};

export const formatSystemStatusName = (name: string): string => {
  return name.replace(/-/g, ' ');
};

export const formatVariantName = (name: string): string => {
  const parts = name.split(':');
  const variant = parts.length > 1 ? parts[1] : parts[0];
  return variant.replace(/_/g, ' ').toUpperCase();
};

