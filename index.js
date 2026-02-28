const root = document.getElementById("root");

function loadImage(path, alt) {
  const img = new Image();
  img.src = path;
  return new Promise((resolve, reject) => {
    img.addEventListener("load", () => {
      img.alt = alt;
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("invalid path"));
    });
  });
}

const path =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtoCi5Sk0757RBeAVKwnB9FMGC58hxGGoAw&s";
const alt = "sea";
loadImage(path, alt)
  .then((pic) => root.append(pic))
  .catch((err) => root.append(err.message));
