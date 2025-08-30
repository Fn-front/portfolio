import { SKILL_TAGS } from './skillTags';

interface SkillData {
  skill: string;
  startYear: number;
  startMonth: number;
  endYear?: number;
  endMonth?: number;
}

export const TECHNICAL_SKILLS: SkillData[] = [
  {
    skill: SKILL_TAGS.TECHNICAL.JQUERY,
    startYear: 2018,
    startMonth: 4,
    endYear: 2020,
    endMonth: 4,
  },
  { skill: SKILL_TAGS.TECHNICAL.REACT, startYear: 2023, startMonth: 1 },
  { skill: SKILL_TAGS.TECHNICAL.NEXT_JS, startYear: 2023, startMonth: 1 },
  {
    skill: SKILL_TAGS.TECHNICAL.VUE_JS,
    startYear: 2021,
    startMonth: 12,
    endYear: 2023,
    endMonth: 11,
  },
  { skill: SKILL_TAGS.TECHNICAL.TYPESCRIPT, startYear: 2021, startMonth: 12 },
  {
    skill: SKILL_TAGS.TECHNICAL.TAILWIND,
    startYear: 2024,
    startMonth: 4,
    endYear: 2024,
    endMonth: 11,
  },
  { skill: SKILL_TAGS.TECHNICAL.HTML_PUG_EJS, startYear: 2018, startMonth: 4 },
  { skill: SKILL_TAGS.TECHNICAL.CSS_SASS, startYear: 2018, startMonth: 4 },
  { skill: SKILL_TAGS.TECHNICAL.JAVASCRIPT, startYear: 2018, startMonth: 4 },
  {
    skill: SKILL_TAGS.TECHNICAL.PYTHON,
    startYear: 2024,
    startMonth: 10,
    endYear: 2025,
    endMonth: 4,
  },
  {
    skill: SKILL_TAGS.TECHNICAL.LARAVEL,
    startYear: 2024,
    startMonth: 1,
    endYear: 2025,
    endMonth: 3,
  },
  {
    skill: SKILL_TAGS.TECHNICAL.MOVABLE_TYPE,
    startYear: 2021,
    startMonth: 4,
    endYear: 2023,
    endMonth: 11,
  },
  {
    skill: SKILL_TAGS.TECHNICAL.WORDPRESS,
    startYear: 2021,
    startMonth: 4,
    endYear: 2022,
    endMonth: 4,
  },
  {
    skill: SKILL_TAGS.TECHNICAL.VITE,
    startYear: 2024,
    startMonth: 1,
    endYear: 2025,
    endMonth: 3,
  },
  {
    skill: SKILL_TAGS.TECHNICAL.WEBPACK,
    startYear: 2020,
    startMonth: 1,
    endYear: 2024,
    endMonth: 1,
  },
  {
    skill: SKILL_TAGS.TECHNICAL.GULP,
    startYear: 2020,
    startMonth: 4,
    endYear: 2022,
    endMonth: 1,
  },
];

export const OTHERS_LIBRARY_SKILLS: SkillData[] = [
  {
    skill: SKILL_TAGS.OTHERS_LIBRARY.RADIX_UI,
    startYear: 2024,
    startMonth: 10,
  },
  {
    skill: SKILL_TAGS.OTHERS_LIBRARY.SHADCN_UI,
    startYear: 2024,
    startMonth: 10,
  },
  {
    skill: SKILL_TAGS.OTHERS_LIBRARY.MATERIAL_UI,
    startYear: 2023,
    startMonth: 12,
    endYear: 2024,
    endMonth: 8,
  },
  {
    skill: SKILL_TAGS.OTHERS_LIBRARY.REACT_HOOK_FORM,
    startYear: 2023,
    startMonth: 12,
  },
  { skill: SKILL_TAGS.OTHERS_LIBRARY.ZOD, startYear: 2023, startMonth: 12 },
  { skill: SKILL_TAGS.OTHERS_LIBRARY.ESLINT, startYear: 2022, startMonth: 1 },
  { skill: SKILL_TAGS.OTHERS_LIBRARY.PRETTIER, startYear: 2022, startMonth: 1 },
  {
    skill: SKILL_TAGS.OTHERS_LIBRARY.STYLELINT,
    startYear: 2022,
    startMonth: 1,
  },
  {
    skill: SKILL_TAGS.OTHERS_LIBRARY.MARKUPLINT,
    startYear: 2023,
    startMonth: 1,
  },
];

export const TOOL_SKILLS: SkillData[] = [
  {
    skill: SKILL_TAGS.TOOL.PHOTOSHOP,
    startYear: 2018,
    startMonth: 4,
    endYear: 2023,
    endMonth: 11,
  },
  {
    skill: SKILL_TAGS.TOOL.ILLUSTRATOR,
    startYear: 2018,
    startMonth: 4,
    endYear: 2023,
    endMonth: 11,
  },
  {
    skill: SKILL_TAGS.TOOL.XD,
    startYear: 2018,
    startMonth: 4,
    endYear: 2023,
    endMonth: 11,
  },
  { skill: SKILL_TAGS.TOOL.FIGMA, startYear: 2023, startMonth: 12 },
  { skill: SKILL_TAGS.TOOL.GITHUB, startYear: 2018, startMonth: 4 },
  { skill: SKILL_TAGS.TOOL.VSCODE, startYear: 2018, startMonth: 4 },
  { skill: SKILL_TAGS.TOOL.BACKLOG, startYear: 2018, startMonth: 4 },
];
