/**
 * Transforms an image URL to use wsrv.nl for image optimization
 * @param imageUrl - The original image URL
 * @param width - Optional width parameter for wsrv.nl
 * @param height - Optional height parameter for wsrv.nl
 * @param quality - Optional quality parameter (1-100)
 * @param format - Optional format (webp, jpeg, png, etc.)
 * @returns The transformed URL using wsrv.nl
 */
export function transformToWsrvUrl(
  imageUrl: string,
  width?: number,
  height?: number,
  quality: number = 85,
  format?: string
): string {
  if (!imageUrl) return imageUrl;

  // If it's already a wsrv.nl URL, return as is
  if (imageUrl.includes("wsrv.nl")) return imageUrl;

  // If it's a relative URL or data URL, return as is
  if (imageUrl.startsWith("/") || imageUrl.startsWith("data:")) return imageUrl;

  try {
    const url = new URL(imageUrl);
    const wsrvUrl = new URL("https://wsrv.nl/");

    // Set the source image
    wsrvUrl.searchParams.set("url", imageUrl);

    // Add optional parameters
    if (width) wsrvUrl.searchParams.set("w", width.toString());
    if (height) wsrvUrl.searchParams.set("h", height.toString());
    if (quality) wsrvUrl.searchParams.set("q", quality.toString());
    if (format) wsrvUrl.searchParams.set("output", format);

    return wsrvUrl.toString();
  } catch (error) {
    // If URL parsing fails, return original URL
    console.warn("Failed to transform image URL to wsrv.nl:", imageUrl, error);
    return imageUrl;
  }
}

/**
 * Transforms an image URL to use wsrv.nl with default optimization settings
 * @param imageUrl - The original image URL
 * @param width - Optional width parameter for wsrv.nl
 * @param height - Optional height parameter for wsrv.nl
 * @returns The transformed URL using wsrv.nl with default settings
 */
export function optimizeImageUrl(
  imageUrl: string,
  width?: number,
  height?: number
): string {
  return transformToWsrvUrl(imageUrl, width, height, 85, "webp");
}

/**
 * Transforms an array of image URLs to wsrv.nl URLs
 * @param images - Array of image objects with url property
 * @param width - Optional width parameter
 * @param height - Optional height parameter
 * @param quality - Optional quality parameter (1-100)
 * @param format - Optional output format (webp, jpg, png, etc.)
 * @returns Array of images with optimized URLs
 */
export function transformImagesToWsrv(
  images: { url: string; description?: string }[],
  width?: number,
  height?: number,
  quality: number = 80,
  format: string = "webp"
): { url: string; description?: string }[] {
  return images.map((image) => ({
    ...image,
    url: transformToWsrvUrl(image.url, width, height, quality, format),
  }));
}

export function isVercelBlobUrl(url: string): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.host.includes(".public.blob.vercel-storage.com");
  } catch {
    return false;
  }
}
