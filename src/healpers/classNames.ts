type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  additional: string[],
  mods: Mods
): string => {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
