import {
    StaticSection,
    Title,
    StatisticList
} from "./StatisticsStyled"


export const Statistics = ({
    title,
    stats
}) => {
    return <StaticSection >
  {title && <Title>{title}</Title>}

        <StatisticList>
            {stats.map(stat => (
                 <li className="item">
      <span className="label">.docx</span>
      <span className="percentage">4%</span>
    </li>
            ))}
   
    {/* <li className="item">
      <span className="label">.mp3</span>
      <span className="percentage">14%</span>
    </li>
    <li className="item">
      <span className="label">.pdf</span>
      <span className="percentage">41%</span>
    </li>
    <li className="item">
      <span className="label">.mp4</span>
      <span className="percentage">12%</span>
    </li> */}
  </StatisticList>
</StaticSection>
}