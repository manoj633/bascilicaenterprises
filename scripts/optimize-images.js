import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base image sizes configuration
const baseSizes = {
  modal: { width: 600, height: 450 }, // 4:3 aspect ratio for modal
  thumbnail: { width: 400, height: 300 }, // 4:3 aspect ratio for thumbnails
};

// Gallery-specific sizes
const gallerySizes = {
  small: { width: 400, height: 300 }, // Mobile thumbnails
  medium: { width: 600, height: 450 }, // Desktop grid
  large: { width: 1200, height: 675 }, // 16:9 Detail view
};

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

/**
 * Optimizes a single image with specified size
 */
async function optimizeImage(inputPath, outputPath, size) {
  try {
    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: "cover",
        position: "center",
      })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✓ Optimized: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${path.basename(inputPath)}:`, error);
  }
}

/**
 * Processes gallery images with specific sizes optimized for the gallery component
 * @param {string} inputPath - Path to the input image
 * @param {string} outputDir - Directory to save optimized images
 */
async function processGalleryImage(inputPath, outputDir) {
  const filename = path.basename(inputPath);
  const nameWithoutExt = path.parse(filename).name;

  await ensureDir(outputDir);

  // Process each gallery-specific size
  for (const [sizeName, dimensions] of Object.entries(gallerySizes)) {
    const outputPath = path.join(
      outputDir,
      `${nameWithoutExt}-${sizeName}.webp`
    );
    await optimizeImage(inputPath, outputPath, dimensions);
  }
}

/**
 * Processes regular images with base sizes
 */
async function processRegularImage(inputPath, outputDir) {
  const filename = path.basename(inputPath);
  const nameWithoutExt = path.parse(filename).name;

  await ensureDir(outputDir);

  // Process each base size
  for (const [sizeName, dimensions] of Object.entries(baseSizes)) {
    const outputPath = path.join(
      outputDir,
      `${nameWithoutExt}-${sizeName}.webp`
    );
    await optimizeImage(inputPath, outputPath, dimensions);
  }
}

/**
 * Recursively process all images in a directory and its subdirectories
 */
async function processDirectory(inputDir, outputDir, isGallery = false) {
  try {
    const entries = await fs.readdir(inputDir, { withFileTypes: true });

    for (const entry of entries) {
      const inputPath = path.join(inputDir, entry.name);
      const outputPath = path.join(outputDir, entry.name);

      if (entry.isDirectory()) {
        // Recursively process subdirectories
        await processDirectory(inputPath, outputPath, isGallery);
      } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
        // Process images
        if (isGallery) {
          await processGalleryImage(inputPath, outputDir);
        } else {
          await processRegularImage(inputPath, outputDir);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${inputDir}:`, error);
  }
}

async function main() {
  // Define paths
  const baseInputDir = path.join(__dirname, "..", "public", "images");
  const projectsDir = path.join(baseInputDir, "projects");

  console.log("Starting image optimization...");

  // Process projects directory (gallery images)
  console.log("\nProcessing gallery images...");
  await processDirectory(projectsDir, projectsDir, true);

  // Process other directories with regular sizes
  const otherDirs = ["equipment", "heroes", "team"];
  for (const dir of otherDirs) {
    const inputDir = path.join(baseInputDir, dir);
    console.log(`\nProcessing ${dir} images...`);
    await processDirectory(inputDir, inputDir, false);
  }

  console.log("\nOptimization complete! ✨");
}

// Run the optimization
main().catch(console.error);
