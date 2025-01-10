import type { HTMLAttributes } from "astro/types";

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string | Record<string, string>>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

// WIDGETS
export interface Hero
  extends Omit<Headline, "classes">,
    Omit<Widget, "isDark" | "classes"> {
  content?: string;
  actions?: string | CallToAction[];
  image?: string | unknown;
}

// COMPONENTS
export interface CallToAction extends Omit<HTMLAttributes<"a">, "slot"> {
  variant?: "primary" | "secondary" | "tertiary" | "link";
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: "button" | "submit" | "reset";
}
