import { defineQuery } from 'next-sanity'

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    role,
    company,
    quote,
    rating,
    image {
      asset->{ _id, url },
      alt
    }
  }
`);

export const CLIENTS_QUERY = defineQuery(`
  *[_type == "client"] | order(order asc) {
    _id,
    name,
    category,
    website,
    logo {
      asset->{ _id, url },
      alt
    }
  }
`);

export const JOB_POSTINGS_QUERY = defineQuery(`
  *[_type == "jobPosting" && isActive == true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    department,
    type,
    level,
    location,
    description,
    tags,
    publishedAt
  }
`);

export const JOB_POSTING_QUERY = defineQuery(`
  *[_type == "jobPosting" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    department,
    type,
    level,
    location,
    description,
    body,
    tags,
    publishedAt
  }
`);

export const SERVICES_QUERY = defineQuery(`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    description,
    heroDescription,
    icon,
    ctaPrimaryText,
    ctaSecondaryText,
    features[] {
      title,
      description,
      icon,
      capabilities,
      techTags,
      stat,
      tag
    },
    stats[] {
      label,
      value,
      prefix,
      suffix,
      isFloat
    },
    order
  }
`);

