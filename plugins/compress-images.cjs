async function parse(input) {
  const imagemin = (await import('imagemin')).default;
  const imageminJpegtran = (await import('imagemin-jpegtran')).default;
  const imageminPngquant = (await import('imagemin-pngquant')).default;
  const files = await imagemin(input, {
    plugins: [imageminJpegtran(), imageminPngquant({ quality: [0.6, 0.8] })],
  }).catch(console.error);
  return files;
}

async function log(savedKiloBytes, timeBefore) {
  const chalk = (await import('chalk')).default;

  console.log(
    chalk.green.bold(
      'Compressed successfully in ',
      chalk.yellow((Date.now() - timeBefore) / 1000),
      's'
    ),

    chalk.green.bold('Total saved ', chalk.yellow(savedKiloBytes), 'KB')
  );
}

async function getFileSize(filePath) {
  const { stat } = await import('node:fs/promises');
  try {
    const stats = await stat(filePath);
    const fileSizeInBytes = stats.size;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;

    return {
      bytes: fileSizeInBytes,
      kilobytes: fileSizeInKB,
      megabytes: fileSizeInMB,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function write(files) {
  let savedKiloBytes = 0;

  const chalk = (await import('chalk')).default;
  const { writeFile } = await import('node:fs/promises');

  const tasks = files.map(async ({ data, sourcePath }) => {
    const before = (await getFileSize(sourcePath)).kilobytes.toFixed(2);
    await writeFile(sourcePath, data);
    const after = (await getFileSize(sourcePath)).kilobytes.toFixed(2);
    const barMarkInLen30 = Math.floor((1 - after / before) * 30);
    const pregress =
      chalk.bgGreen.green(' ').repeat(barMarkInLen30) +
      chalk.bgGray.gray(' ').repeat(30 - barMarkInLen30);

    console.log(
      `# File: ${sourcePath}
  - Before: ${before} KB
  - After: ${after} KB
  - Compressed Rate: ${pregress} ${((1 - after / before) * 100).toFixed(2)}%\n`
    );
    savedKiloBytes += before - after;
  });

  await Promise.all([...tasks]);

  return savedKiloBytes;
}

/**
 * @param {string[]} input
 */
async function compress(input) {
  let compressed = false;

  try {
    const chalk = (await import('chalk')).default;

    console.log(chalk.green.bold('Start compressing images!'));

    const time = Date.now();

    await parse(input)
      .then(write)
      .then((bytes) => log(bytes, time));

    compressed = true;
  } catch (error) {
    console.log(error);
    compressed = false;
  }
}

module.exports = {
  compress,
};
