const sharp = require("sharp");
const path = require("path");

const inputImagePath = "./images/inputImagePath.png";

const fileNameWithoutExtension = path.basename(
  inputImagePath,
  path.extname(inputImagePath)
);

const outputImagePath = `./images/${fileNameWithoutExtension}_with_watermark.png`;

const watermarkPath = "./images/logo.png";

const watermarkSettings = {
  top: 10,
  left: 10,
  blend: "over",
};

sharp(inputImagePath)
  .composite([
    {
      input: watermarkPath,
      top: watermarkSettings.top,
      left: watermarkSettings.left,
      blend: watermarkSettings.blend,
    },
  ])
  .toFile(outputImagePath, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Водяной знак успешно добавлен!");
      console.log("Создано изображение с водяным знаком:", outputImagePath);
      console.log(info);
    }
  });
