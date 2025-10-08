import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(
  __dirname,
  "..",
  "public",
  "attached_assets",
  "gallery"
);
const outputDir = path.join(
  __dirname,
  "..",
  "public",
  "attached_assets",
  "gallery",
  "optimized"
);

// Image sizes configuration
const sizes = {
  modal: { width: 600, height: 450 }, // 4:3 aspect ratio for modal
  thumbnail: { width: 400, height: 300 }, // 4:3 aspect ratio for thumbnails
};

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(inputPath, size) {
  const filename = path.basename(inputPath);
  const nameWithoutExt = path.parse(filename).name;
  const outputPath = path.join(
    outputDir,
    `${nameWithoutExt}-${size.width}x${size.height}.webp`
  );

  try {
    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: "cover",
        position: "center",
      })
      .webp({ quality: 80 }) // Use WebP format with 80% quality
      .toFile(outputPath);

    console.log(`✓ Optimized: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${filename}:`, error);
  }
}

async function processImages() {
  try {
    // Ensure output directory exists
    await ensureDir(outputDir);

    // Get all images from input directory
    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    console.log(`Found ${imageFiles.length} images to process...`);

    // Process each image in both sizes
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      await optimizeImage(inputPath, sizes.modal);
      await optimizeImage(inputPath, sizes.thumbnail);
    }

    console.log("\nOptimization complete! ✨");
    console.log(
      `Processed ${imageFiles.length} images in ${
        Object.keys(sizes).length
      } sizes.`
    );
  } catch (error) {
    console.error("Error processing images:", error);
  }
}

// Run the optimization
processImages();
