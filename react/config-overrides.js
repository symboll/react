const { override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin,
  addWebpackAlias,
  addWebpackResolve
} = require('customize-cra');

const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require("path");

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src")
  }),
  addWebpackResolve({
    extensions: ['.jsx', '.js', '.json']
  })
);