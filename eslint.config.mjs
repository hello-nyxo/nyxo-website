import nextConfig from "eslint-config-next/core-web-vitals";
import tsConfig from "eslint-config-next/typescript";

const eslintConfig = [...nextConfig, ...tsConfig];

export default eslintConfig;
