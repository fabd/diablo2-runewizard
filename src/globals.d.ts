import { Rune } from "@/types";

declare global {
  export interface RunewizardGlobals {
    runesData: Rune[];
  }

  interface Window {
    App: RunewizardGlobals;
  }
}
