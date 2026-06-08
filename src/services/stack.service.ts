import { stackMock } from "@/features/stack/data/mock";
import type { StackItem } from "@/features/stack/types";

export function getStack(): StackItem[] {
  return stackMock;
}
