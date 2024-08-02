declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// if you use scss
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  // eslint-disable-next-line no-undef
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
