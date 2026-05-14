export const site = {
  url: "https://tokarev.work",
  name: "Gregor Tokarev",
  description:
    "Gregor Tokarev is a software engineer focused on full-stack product engineering, frontend systems, and thoughtful developer tools.",
  author: "Gregor Tokarev",
  locale: "en_US",
  themeColor: "#39414e",
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.author,
  url: site.url,
  jobTitle: "Software Engineer",
  knowsAbout: [
    "Full-stack engineering",
    "Frontend engineering",
    "Developer tools",
    "Go",
    "Node.js",
    "Angular",
    "Nuxt",
    "Django",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  publisher: personJsonLd,
};

export const canonicalUrl = (path: string) => {
  const url = new URL(path, site.url);
  const hasExtension = /\.[^/]+$/.test(url.pathname);

  if (!hasExtension && !url.pathname.endsWith("/")) {
    url.pathname = `${url.pathname}/`;
  }

  return url.toString();
};
