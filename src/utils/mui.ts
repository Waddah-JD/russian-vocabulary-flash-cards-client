// stolen from https://stackoverflow.com/a/73770876 to get styled to "support" the forwarded prop
export function shouldForwardProp<CustomProps extends Record<string, unknown>>(
  props: Array<keyof CustomProps>,
  prop: PropertyKey
): boolean {
  return !props.includes(prop as string);
}
