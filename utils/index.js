// 工具包

const isNull = (param) => {
  return ['', undefined, NaN, null].includes(param);
};

// const getParams = (arr = process.argv) => {
//   console.log('process.argv==>', process.env.npm_lifecycle_script);
//   const argv = [...arr];
//   const params = argv.splice(2);
//   const obj = {};
//   params.map((param) => {
//     const keyValue = param.split('=');
//     const key = keyValue[0].replace(/-/g, '');
//     const value = keyValue[1];
//     obj[key] = value;
//   });
//   return obj;
// };

module.exports = {
  // params: getParams(),
  // npmParams: getParams(process.env.npm_config_argv),
  isNull,
};
