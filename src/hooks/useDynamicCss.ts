import { useState, useEffect } from 'react';

export const useDynamicCss = (defaultGroup: string = 'jjjei_gmo:0') => {
  const [group, setGroup] = useState<string>(() => {
    return localStorage.getItem('themeGroup') || defaultGroup;
  });

  useEffect(() => {
    localStorage.setItem('themeGroup', group);
    const linkId = 'dynamic-theme';
    
    // Remove any old link tags that might exist from previous setups
    const oldLink = document.querySelector(`link#${linkId}`);
    if (oldLink) {
      oldLink.remove();
    }

    let styleElement = document.getElementById(linkId) as HTMLStyleElement | null;
    
    if (!styleElement || styleElement.tagName.toLowerCase() !== 'style') {
      if (styleElement) styleElement.remove();
      styleElement = document.createElement('style');
      styleElement.id = linkId;
      document.head.appendChild(styleElement);
    }
    
    // Fetch directly from GitHub raw to bypass all CDN edge caches
    fetch(`https://raw.githubusercontent.com/tony-jjjentinc/assets/main/colors/v2/${group}.css?t=${Date.now()}`)
      .then(res => res.text())
      .then(css => {
        const modifiedCss = css.replace(
          /linear-gradient\(225deg,\s*(#[a-fA-F0-9]{3,6})\s*0%,\s*(#[a-fA-F0-9]{3,6})\s*100%\)/g, 
          'linear-gradient(225deg, $2 0%, $1 100%)'
        );
        if (styleElement) {
          styleElement.textContent = modifiedCss;
        }
      })
      .catch(err => console.error('Failed to inject dynamic CSS', err));

  }, [group]);

  return [group, setGroup] as const;
};
