import type { ForceMountable } from '@rn-primitives/types';

interface CollapsibleRootProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
}

type CollapsibleContentProps = ForceMountable;

export type { CollapsibleContentProps, CollapsibleRootProps };
