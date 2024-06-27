import * as fs from 'fs';
import * as YAML from 'yaml';

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

const workArray: unknown[] = [];

for (const file of fs.readdirSync('content/work')) {
  const new_object = YAML.parse(
    fs.readFileSync(`./content/work/${file}`).toString(),
  );
  new_object.startDate = new Date(new_object.startDate).getTime();
  new_object.endDate = new Date(new_object.endDate).getTime();
  workArray.push(new_object);
}

console.log(workArray);
console.log('converting to ts code');
console.log(jsonToJsObjectString(JSON.stringify(workArray)));

const outPutFile = `
// generated
import { WorkExperienceDataEntry } from '../types/workTypes';

export const userWorkExperience: WorkExperienceDataEntry[] = ${jsonToJsObjectString(JSON.stringify(workArray))}
`;
console.log(outPutFile);
fs.writeFileSync('./src/generated/work.generated.ts', outPutFile);
