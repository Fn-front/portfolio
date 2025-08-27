'use client'

import dynamic from 'next/dynamic'
import { TECHNICAL_SKILLS, OTHERS_LIBRARY_SKILLS, TOOL_SKILLS } from '@/functions/constants/skillsData'

const ProfileSkillChart = dynamic(() => import('./skillChart'), {
  ssr: false
})

export const ProfileSkill = () => {

  const calculatePeriod = (
    startYear: number,
    startMonth: number,
    endYear?: number,
    endMonth?: number
  ) => {
    const nowDate = new Date();
    const actualEndYear = endYear ?? nowDate.getFullYear();
    const actualEndMonth = endMonth ?? nowDate.getMonth();

    if (isNaN(startYear) || isNaN(startMonth) || isNaN(actualEndYear) || isNaN(actualEndMonth)) {
      return 0;
    }

    const start = startYear * 12 + startMonth;
    const end = actualEndYear * 12 + actualEndMonth;
    const diffMonths = end - start;

    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    const decimalYears = Number((years + (months / 12)).toFixed(1));

    return decimalYears;
  };

  const technicalData = TECHNICAL_SKILLS.map(skillData => ({
    skill: skillData.skill,
    years: calculatePeriod(skillData.startYear, skillData.startMonth, skillData.endYear, skillData.endMonth)
  }));

  const othersLibrary = OTHERS_LIBRARY_SKILLS.map(skillData => ({
    skill: skillData.skill,
    years: calculatePeriod(skillData.startYear, skillData.startMonth, skillData.endYear, skillData.endMonth)
  }));

  const toolData = TOOL_SKILLS.map(skillData => ({
    skill: skillData.skill,
    years: calculatePeriod(skillData.startYear, skillData.startMonth, skillData.endYear, skillData.endMonth)
  }));

  return (
    <>
      <h1 className='c_h2 u_mt40'>Skills</h1>
      <div className='c_profile_skill u_mt24'>
        <h2 className='c_h3 u_mt36'>Technical Experience</h2>
        <div style={{ width: '100%', height: '650px' }}>
          <ProfileSkillChart data={technicalData} />
        </div>
        <h2 className='c_h3 u_mt36'>Others Library Experience</h2>
        <div style={{ width: '100%', height: '380px' }}>
          <ProfileSkillChart data={othersLibrary} />
        </div>
        <h2 className='c_h3 u_mt36'>Tool Experience</h2>
        <div className='c_profile_text_small u_mt8' style={{ textIndent: '-1em', paddingLeft: '1em' }}>※デザインツールの経験年数は、Web・アプリケーション開発における使用歴です。<br />デザイン制作歴ではありません。</div>
        <div style={{ width: '100%', height: '350px' }}>
          <ProfileSkillChart data={toolData} />
        </div>
      </div>
    </>
  )
}

export default ProfileSkill