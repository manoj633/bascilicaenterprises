# Image Organization Structure

This directory contains all images used in the Bascilica Enterprises website, organized by purpose and type.

## Directory Structure

```
images/
├── heroes/         # Hero section banner images
├── projects/       # Project-related images
│   ├── bathroom/   # Bathroom project images
│   ├── commercial/ # Commercial project images
│   └── residential/# Residential project images
├── team/           # Team and company photos
├── equipment/      # Equipment and tools photos
└── optimized/      # Optimized versions of images
```

## Image Types and Naming Conventions

1. Project Images:

   - Before images: `before.jpg`
   - After images: `after.png`
   - Location: `/projects/{category}/`

2. Optimized Images:

   - Thumbnails: `{original-name}-{dimensions}.webp`
   - Example: `bathroom-waterproofing-1-400x300.webp`
   - Location: `/optimized/`

3. Hero Images:

   - Name format: `Hero_{description}_{id}.png`
   - Location: `/heroes/`

4. Team Photos:

   - Name format: `{description}_{id}.png`
   - Location: `/team/`

5. Equipment Photos:
   - Name format: `{description}_{id}.png`
   - Location: `/equipment/`

## Usage Guidelines

1. Always use optimized versions for thumbnails and grid views
2. Use original high-resolution images for hero sections and detailed views
3. Maintain consistent naming conventions for new images
4. Place new images in appropriate category folders
5. Update this documentation when adding new image categories
