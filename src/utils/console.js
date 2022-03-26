const colors = {
  greenBlock: 'color: white; background-color: green;',
  redBlock: 'color: white; background-color: red;',
  purpleBlock: 'color: white; background-color: purple;',
};

export const con = {
  state: state => console.log('%cstate', colors.purpleBlock, '\n', state),
  success: message => console.log('%csuccess:', colors.greenBlock, message),
  fail: message => console.log('%cfail:', colors.redBlock, message),
};
