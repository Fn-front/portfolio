import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

type SkillData = {
  skill: string;
  years: number;
}

type ProfileSkillChartProps = {
  data: SkillData[];
}

export const ProfileSkillChart = ({ data }: ProfileSkillChartProps) => {

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        layout='vertical'
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 100,
          bottom: 5
        }}
      >
        <CartesianGrid
          strokeDasharray='3 3'
          stroke='#404040'
          horizontal={true}
          vertical={true}
        />
        <XAxis
          type='number'
          unit='年'
          stroke='#9ca3af'
          tick={{ fill: '#9ca3af' }}
          axisLine={{ stroke: '#525252' }}
        />
        <YAxis
          dataKey='skill'
          type='category'
          stroke='#9ca3af'
          tick={{ fill: '#9ca3af' }}
          axisLine={{ stroke: '#525252' }}
        />
        <Tooltip
          formatter={(value) => [`${value}年`, 'スキル経験']}
          contentStyle={{
            backgroundColor: '#262626',
            border: '1px solid #404040',
            color: '#e5e5e5',
            borderRadius: '4px'
          }}
          labelStyle={{ color: '#e5e5e5' }}
        />
        <Legend
          wrapperStyle={{
            color: '#9ca3af'
          }}
        />
        <Bar
          dataKey='years'
          name='経験年数'
          fill='#737373'
          radius={[0, 4, 4, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
};

export default ProfileSkillChart