// 工具包

const isNull = (param) => {
  return ['', undefined, NaN, null].includes(param);
};

const getEnvParams = () => {
  const argv = [...process.argv];
  const params = argv.splice(2);
  const obj = {};
  params.map((param) => {
    const keyValue = param.split('=');
    const key = keyValue[0].replace(/-/g, '');
    const value = keyValue[1];
    obj[key] = value;
  });
  return obj;
};

module.exports = {
  envPramas: getEnvParams(),
  isNull,
};
