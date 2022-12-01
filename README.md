# React

npx create-snowpack-app react-snowpack --template @snowpack/app-template-minimal

1. npm install react react-dom --save
2. npm init (JS找不到，也有可能是路徑問題: config mount)
    react
    react-dom

# Table
1. npm install react-table
https://ithelp.ithome.com.tw/articles/10294259
https://react-table-v7.tanstack.com/docs/examples/basic 

react-bootstrap


[21:11:25] [snowpack] react/jsx-runtime: Unscannable package import found.
Snowpack scans source files for package imports at startup, and on every change.
But, sometimes an import gets added during the build process, invisible to our file scanner.
We'll prepare this package for you now, but should add "react/jsx-runtime" to "knownEntrypoints"
in your config file so that this gets prepared with the rest of your imports during startup.
[21:11:25] [snowpack] + react/jsx-runtime@18.2.0
> https://bobbyhadz.com/blog/react-cannot-find-module-react-jsx-runtime 
npm install --save-dev @types/react@latest @types/react-dom@latest

botton
https://mui.com/material-ui/getting-started/installation/ 
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
