const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path || !path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  if (basePath && path.startsWith(basePath)) {
    return path;
  }

  return `${basePath}${path}`;
}
