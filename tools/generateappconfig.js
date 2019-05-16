const appFolder = ".";
const htmlFile = `${appFolder}/index.html`;
const fs = require("fs-then-native");
const cheerio = require("cheerio");
const getScriptsFromHTMLData = data => {
  const $ = cheerio.load(data);
  const scripts = [];
  $("script").each((index, item) => {
    scripts.push({ orderIndex: index, path: item.attribs.src });
  });
  return scripts;
};
const getStylesFromHTMLData = data => {
  const $ = cheerio.load(data);
  const styles = [];
  $("link[rel=stylesheet]").each((index, item) => {
    styles.push({ orderIndex: index, path: item.attribs.href });
  });
  return styles;
};
const getTitleFromHTMLData = data => {
  const $ = cheerio.load(data);
  return $("title").text();
};
const getValueFromIndexFile = async () => {
  try {
    let htmlData = await fs.readFile(htmlFile);
    htmlData = htmlData.toString("utf-8");
    let scripts = getScriptsFromHTMLData(htmlData);
    let styles = getStylesFromHTMLData(htmlData);
    let title = getTitleFromHTMLData(htmlData);
    return {
      name: title,
      uri: title,
      jsFiles : scripts,
      cssFiles: styles
    }
  } catch (error) {
    console.log(error);
  }
};

const saveConfig = async (config) =>{
  await fs.writeFileSync(`${appFolder}/assets/portal_app2.json`,config);
  console.log('file saved1')
}
const init = async ()=>{
  let configObject = await getValueFromIndexFile();
   await saveConfig(JSON.stringify(configObject));
  console.log("file saved2");
}
init();
