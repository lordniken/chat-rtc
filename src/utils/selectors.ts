enum SPLITTER {
  position = 'position',
  collapsed = 'collapsed',
}

export const saveSplitterPosition = (position: number) => localStorage.setItem(SPLITTER.position, position.toString());
export const getSplitterPosition = () => parseInt(localStorage.getItem(SPLITTER.position) || '', 10);
export const saveSplitterCollapseState = (state: boolean) => localStorage.setItem(SPLITTER.collapsed, state.toString());
export const getSplitterCollapseState = () => localStorage.getItem(SPLITTER.collapsed) === 'true';