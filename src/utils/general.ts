import { isNil } from "./types";

export function oneOfTheArgsIsNotNil(...args: unknown[]): boolean {
  return args.some((it) => !isNil(it));
}
