import * as fs from 'fs';
import * as matter from 'gray-matter';

function stripFrontMatter(content: string): string {
  const frontMatterPattern = /^---[\s\S]*?---\s*/;
  return content.replace(frontMatterPattern, '');
}

function jsonToJsObjectString(jsonString: string) {
  try {
    // Parse the JSON string
    const jsonObj = JSON.parse(jsonString);

    // Convert the JSON object to a formatted JavaScript string
    const jsString = JSON.stringify(jsonObj, null, 2)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/"/g, "'");

    return `${jsString};`;
  } catch (error) {
    console.error('Invalid JSON string:', error);
    return null;
  }
}

console.log('compiling work entrys');

// read all the files in content / work into an object,
// generate the code file from that

const blogManifest: unknown[] = [];

for (const file of fs.readdirSync('content/blog')) {
  const fileContent = fs.readFileSync(`content/blog/${file}`).toString();

  /*
    ---
    slug: the_title
    title: The Title
    date: some date
    blurb: some long blurb
    ---
  */

  interface tempBlogManifestEntry {
    date: string | number;
  }

  const newObject: unknown = { file: file, ...matter(fileContent).data };
  if ((newObject as tempBlogManifestEntry).date !== undefined) {
    (newObject as tempBlogManifestEntry).date = new Date(
      (newObject as tempBlogManifestEntry).date
    ).getTime();
  }

  // fs.copyFileSync(`content/blog/${file}`, `public/content/blog/${file}`);
  fs.writeFileSync(
    `public/content/generated/blog/${file}`,
    stripFrontMatter(fileContent)
  );
  blogManifest.push(newObject);
}

console.log(blogManifest);
console.log('converting to ts code');
console.log(jsonToJsObjectString(JSON.stringify(blogManifest)));

const outPutFile = `
// generated
import { BlogPostEntryData } from '../types/blogTypes';

export const userBlogManifest: BlogPostEntryData[] = ${jsonToJsObjectString(JSON.stringify(blogManifest))}
`;
console.log(outPutFile);
fs.writeFileSync('./src/generated/blog.generated.ts', outPutFile);
