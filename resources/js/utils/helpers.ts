export const sleep = (time: number) =>
  new Promise((res) => setTimeout(res, time));

export const calculateWindowSize = (windowWidth: number) => {
  if (windowWidth >= 1200) {
    return 'lg';
  }
  if (windowWidth >= 992) {
    return 'md';
  }
  if (windowWidth >= 768) {
    return 'sm';
  }
  return 'xs';
};

export const setWindowClass = (classList: string) => {
  const window: HTMLElement | null =
    document && document.getElementById('app');
  if (window) {
    // @ts-ignore
    console.log('setWindowClass')
     // @ts-ignore
    window.classList = classList;
  }
  else{
    console.log('no')
  }
};
export const addWindowClass = (classList: string) => {
  const window: HTMLElement | null =
    document && document.getElementById('app');
  if (window) {
    console.log('setWindowClass 2')
     // @ts-ignore
    window.classList.add(classList);
  }
  else{
    console.log('no 2')
  }
};

export const removeWindowClass = (classList: string) => {
  const window: HTMLElement | null =
    document && document.getElementById('app');
  if (window) {
    // @ts-ignore
    console.log('setWindowClass 3')
     // @ts-ignore
    window.classList.remove(classList);
  }
  else{
    console.log('no 3')
  }
};
