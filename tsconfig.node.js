const config = {
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts", "src/**/*.ts"],
  "exclude": ["node_modules"],
}

module.exports = config;