import sharp from 'sharp';
import path from 'path';

const assetsDir = './src/assets';
const files = ['leo.png', 'mia.png', 'ivy.png', 'sam.png'];

// The checkerboard pattern consists of alternating light grey and white pixels.
// We'll remove any pixel that is very close to grey/white (high brightness, low saturation).
async function removeBackground(filePath) {
    const image = sharp(filePath);
    const { width, height, channels } = await image.metadata();

    const rawBuffer = await image.ensureAlpha().raw().toBuffer();

    const newBuffer = Buffer.from(rawBuffer);

    for (let i = 0; i < width * height; i++) {
        const offset = i * 4;
        const r = newBuffer[offset];
        const g = newBuffer[offset + 1];
        const b = newBuffer[offset + 2];

        // Check if pixel is close to the checkerboard colors
        // Checkerboard patterns are typically alternating ~#CCCCCC and ~#FFFFFF
        // or similar light grey + white
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const saturation = max === 0 ? 0 : (max - min) / max;
        const brightness = (r + g + b) / 3;

        // If pixel is very low saturation (grey/white) and bright enough
        if (saturation < 0.08 && brightness > 180) {
            newBuffer[offset + 3] = 0; // Set alpha to 0 (transparent)
        }
    }

    await sharp(newBuffer, { raw: { width, height, channels: 4 } })
        .png()
        .toFile(filePath + '.tmp');

    // Rename tmp to original
    const fs = await import('fs');
    fs.renameSync(filePath + '.tmp', filePath);

    console.log(`✅ Processed: ${filePath}`);
}

async function main() {
    for (const file of files) {
        await removeBackground(path.join(assetsDir, file));
    }
    console.log('🎉 All backgrounds removed!');
}

main().catch(console.error);
