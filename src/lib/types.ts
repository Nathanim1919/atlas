export interface SanityFeature {
  title: string;
  description: string;
  icon?: string;
  capabilities?: string[];
  techTags?: string[];
  stat?: string;
  tag?: string;
}

export interface SanityStat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  isFloat?: boolean;
}

export interface SanityService {
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  heroDescription?: string;
  icon: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  features?: SanityFeature[];
  stats?: SanityStat[];
  order?: number;
}

