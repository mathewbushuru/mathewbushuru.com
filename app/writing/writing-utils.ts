import fs from "fs";
import path from "path";

type BlogMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  preview: string;
  image?: string;
};

function parseFrontMatter(rawFileContent: string) {
  const frontMatterRegex = /---\s*([\s\S]*?)\s*---/;

  const frontMatterMatchFound = frontMatterRegex.exec(rawFileContent)!;
  const frontMatterBlock = frontMatterMatchFound[1];
  const frontMatterLines = frontMatterBlock.trim().split("\n");

  const content = rawFileContent.replace(frontMatterRegex, "").trim();

  const blogMetadata: Partial<BlogMetadata> = {};
  frontMatterLines.forEach((line) => {
    const [key, ...valuesArr] = line.split(": ");
    let value = valuesArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // remove quotes
    blogMetadata[key.trim() as keyof BlogMetadata] = value;
  });

  return { content, blogMetadata: blogMetadata as BlogMetadata };
}

function getMDXFiles(dir: string) {
  const filesArr = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx");
  return filesArr;
}

function readMDXFile(filepath: string) {
  const rawFileContent = fs.readFileSync(filepath, "utf-8");
  return rawFileContent;
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  const mdxDataArr = mdxFiles.map((file) => {
    const fileContent = readMDXFile(path.join(dir, file));
    const { content, blogMetadata } = parseFrontMatter(fileContent);
    const slug = path.basename(file, path.extname(file));
    return { slug, blogMetadata, content };
  });

  return mdxDataArr;
}

export function getBlogArticles() {
  return getMDXData(path.join(process.cwd(), "app", "writing", "(articles)"));
}