import { Button as ShadButton } from '@shadcn/ui/button';

export function Button(props: React.ComponentProps<typeof ShadButton>) {
  return <ShadButton {...props} />;
}