/*
  slug: the_title
  title: The Title
  startDate: some date
  endDate: some date
  blurb: some long blurb
  skills: list of skills
  company: some company
*/

export interface ProjectEntryData {
  file: string;
  slug: string;
  title: string;
  startDate: number;
  endDate: number;
  blurb: string;
  skills: string[];
  company: string;
}
