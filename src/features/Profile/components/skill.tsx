'use client'

import dynamic from 'next/dynamic'

const ProfileSkillChart = dynamic(() => import('./skillChart'), {
  ssr: false
})

export const ProfileSkill = () => {

  const calculatePeriod = (
    startYear: number,
    startMonth: number,
    endYear: number,
    endMonth: number
  ) => {

    if (isNaN(startYear) || isNaN(startMonth) || isNaN(endYear) || isNaN(endMonth)) {
      return 0;
    }

    const start = startYear * 12 + startMonth;
    const end = endYear * 12 + endMonth;
    const diffMonths = end - start;

    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    const decimalYears = Number((years + (months / 12)).toFixed(1));

    return decimalYears;
  };

  const nowDate = new Date();

  const technicalData = [
    { skill: 'React', years: calculatePeriod(2023, 1, nowDate.getFullYear(), nowDate.getMonth()) },
    { skill: 'Next.js', years: calculatePeriod(2023, 1, nowDate.getFullYear(), nowDate.getMonth()) },
    { skill: 'Vue.js', years: calculatePeriod(2021, 12, 2023, 11) },
    { skill: 'TypeScript', years: calculatePeriod(2021, 12, nowDate.getFullYear(), nowDate.getMonth()) },
    { skill: 'Tailwind', years: calculatePeriod(2024, 4, 2024, 11) },
    { skill: 'HTML/Pug/Ejs', years: calculatePeriod(2018, 4, nowDate.getFullYear(), nowDate.getMonth()) },
    { skill: 'CSS/SASS', years: calculatePeriod(2018, 4, nowDate.getFullYear(), nowDate.getMonth()) },
    { skill: 'JavaScript', years: calculatePeriod(2018, 4, nowDate.getFullYear(), nowDate.getMonth()) },
    { skill: 'laravel', years: calculatePeriod(2024, 1, 2024, 11) },
    { skill: 'MovableType', years: calculatePeriod(2021, 4, 2023, 11) },
    { skill: 'WordPress', years: calculatePeriod(2021, 4, 2022, 4) },
    { skill: 'Webpack', years: calculatePeriod(2020, 1, 2024, 1) },
    { skill: 'Gulp', years: calculatePeriod(2020, 4, 2022, 1) },
  ];

  const toolData = [
    { skill: 'PhotoShop', years: calculatePeriod(2018, 4, 2023, 11) },
    { skill: 'Illustrator', years: calculatePeriod(2018, 4, 2023, 11) },
    { skill: 'XD', years: calculatePeriod(2018, 4, 2023, 11) },
    { skill: 'Figma', years: calculatePeriod(2023, 12, nowDate.getFullYear(), nowDate.getMonth()) },
    { skill: 'Github', years: calculatePeriod(2018, 4, nowDate.getFullYear(), nowDate.getMonth()) },
    { skill: 'VSCode', years: calculatePeriod(2018, 4, nowDate.getFullYear(), nowDate.getMonth()) },
    { skill: 'Backlog', years: calculatePeriod(2018, 4, nowDate.getFullYear(), nowDate.getMonth()) },
  ];

  return (
    <>
      <h1 className='c_h2 u_mt40'>Skills</h1>
      <div className='c_profile_skill u_mt24'>
        <h2 className='c_h3 u_mt36'>Technical Experience</h2>
        <div style={{ width: '100%', height: '600px' }}>
          <ProfileSkillChart data={technicalData} />
        </div>
        <h2 className='c_h3 u_mt36'>Tool Experience</h2>
        <div style={{ width: '100%', height: '350px' }}>
          <div className='c_profile_text_small u_mt8' style={{ textIndent: '-1em', paddingLeft: '1em' }}>※デザインツールの経験年数は、Web・アプリケーション開発における使用歴です。<br />デザイン制作歴ではありません。</div>
          <ProfileSkillChart data={toolData} />
        </div>
      </div>
    </>
  )
}

export default ProfileSkill