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

const projectManifest: unknown[] = [];

for (const file of fs.readdirSync('content/project')) {
  const fileContent = fs.readFileSync(`content/project/${file}`).toString();

  /*
    ---
    slug: the_title
    title: The Title
    startDate: some date
    endDate: some date
    blurb: some long blurb
    skills: list of skills
    company: some company
    ---
  */

  interface tempProjectManifestEntry {
    startDate: string | number;
    endDate: string | number;
  }

  const newObject: unknown = { file: file, ...matter(fileContent).data };
  if ((newObject as tempProjectManifestEntry).startDate !== undefined) {
    (newObject as tempProjectManifestEntry).startDate = new Date(
      (newObject as tempProjectManifestEntry).startDate
    ).getTime();
  }

  if ((newObject as tempProjectManifestEntry).endDate !== undefined) {
    (newObject as tempProjectManifestEntry).endDate = new Date(
      (newObject as tempProjectManifestEntry).endDate
    ).getTime();
  }

  // fs.copyFileSync(`content/blog/${file}`, `public/content/blog/${file}`);
  fs.writeFileSync(
    `public/content/generated/project/${file}`,
    stripFrontMatter(fileContent)
  );
  projectManifest.push(newObject);
}

console.log(projectManifest);
console.log('converting to ts code');
console.log(jsonToJsObjectString(JSON.stringify(projectManifest)));

const outPutFile = `
// generated
import { ProjectEntryData } from '../types/projectTypes';

export function userProjectManifest(): ProjectEntryData[] {
  return ${jsonToJsObjectString(JSON.stringify(projectManifest))}
}
`;
console.log(outPutFile);
fs.writeFileSync('./src/generated/project.generated.ts', outPutFile);
