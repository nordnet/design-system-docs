import { Input } from "@nordnet/ui";

type PropsOf<T> = T extends ((props: infer P) => JSX.Element | null)
  ? P
  : never;

type SelectProps = PropsOf<typeof Input.Select>;

export let Select: React.FunctionComponent<SelectProps> = () => null;
