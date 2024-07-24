type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  additional: string[],
  mods: Mods,
): string => [
  cls,
  ...additional.filter((className) => Boolean(className)),
  Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
