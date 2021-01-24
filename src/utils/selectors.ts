export const saveSplitterPosition = (position: number) => localStorage.setItem('position', position.toString());
export const getSplitterPosition = () => parseInt(localStorage.getItem('position') || '', 10);
export const saveSplitterCollapseState = (state: boolean) => localStorage.setItem('collapsed', state.toString());
export const getSplitterCollapseState = () => localStorage.getItem('collapsed') === 'true';

export const getDefaultLang = () => localStorage.getItem('i18nextLng') || 'ru';

export const saveDefaultTheme = (theme: string) => localStorage.setItem('theme', theme);
export const getDefaultTheme = (): TAppTheme => localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

export const setToken = (token: string) => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');