import { useState, useEffect } from 'react';

export const useDynamicCss = (defaultGroup: string = 'admin') => {
  const [group, setGroup] = useState<string>(() => {
    return localStorage.getItem('themeGroup') || defaultGroup;
  });

  useEffect(() => {
    localStorage.setItem('themeGroup', group);
    const linkId = 'dynamic-theme';
    let linkElement = document.getElementById(linkId) as HTMLLinkElement | null;
    
    if (linkElement) {
      linkElement.href = `https://tony-jjjentinc.github.io/assets/colors/${group}.css`;
    } else {
      linkElement = document.createElement('link');
      linkElement.id = linkId;
      linkElement.rel = 'stylesheet';
      linkElement.href = `https://tony-jjjentinc.github.io/assets/colors/${group}.css`;
      document.head.appendChild(linkElement);
    }
  }, [group]);

  return [group, setGroup] as const;
};
