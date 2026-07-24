import { useState, useEffect } from 'react';

export const useDynamicCss = (defaultGroup: string = 'admin') => {
  const [group, setGroup] = useState<string>(defaultGroup);

  useEffect(() => {
    const linkId = 'dynamic-theme';
    let linkElement = document.getElementById(linkId) as HTMLLinkElement | null;

    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.id = linkId;
      linkElement.rel = 'stylesheet';
      linkElement.href = `https://tony-jjjentinc.github.io/assets/colors/${group}.css?v=${Date.now()}`;
      document.head.appendChild(linkElement);
    } else {
      linkElement.href = `https://tony-jjjentinc.github.io/assets/colors/${group}.css?v=${Date.now()}`;
    }
  }, [group]);

  return [group, setGroup] as const;
};
