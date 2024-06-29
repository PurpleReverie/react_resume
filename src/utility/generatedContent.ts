export function getBlogPostURL(file: string): string {
  return `/content/generated/blog/${file}`;
}

export function getProjectPostURL(file: string): string {
  return `/content/generated/project/${file}`;
}
