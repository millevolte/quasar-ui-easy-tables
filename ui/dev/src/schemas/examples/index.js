export const basics = {
  code: [require('./basics').default],
  string: [require('!!raw-loader!./basics').default],
}
export const editing = {
  code: [require('./editing').default, require('./editing2').default],
  string: [require('!!raw-loader!./editing').default, require('!!raw-loader!./editing2').default],
}
