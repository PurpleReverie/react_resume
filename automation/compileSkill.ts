import * as fs from 'fs';
import * as YAML from 'yaml';

const skillFileString = `// generated
import { SkillEntry } from '../components/resume/Skills';

export const userSkills: SkillEntry[] = SKILLS;
`;

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

// read all the files in content / work into an object,
// generate the code file from that

const skillArray: unknown[] = [];

for (const file of fs.readdirSync('content/skills')) {
  const new_object = YAML.parse(
    fs.readFileSync(`./content/skills/${file}`).toString()
  );
  skillArray.push(new_object);
}

console.log(skillArray);
console.log('converting to ts code');
console.log(jsonToJsObjectString(JSON.stringify(skillArray)));

const outPutFile = skillFileString.replace(
  'SKILLS',
  jsonToJsObjectString(JSON.stringify(skillArray)) || ''
);
console.log(outPutFile);
fs.writeFileSync('./src/generated/skills.generated.ts', outPutFile);
