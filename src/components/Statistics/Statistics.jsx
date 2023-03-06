import PropTypes from 'prop-types';

import {
  StaticSection,
  Title,
  StatisticList,
  Item,
  Label,
  PercentageValue,
} from './StatisticsStyled';

import { getRandomHexColor } from '../../data/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StaticSection>
      {title && <Title>{title}</Title>}

      <StatisticList>
        {stats.map(stat => (
          <Item key={stat.id} color={getRandomHexColor()}>
            <Label>{stat.label}</Label>
            <PercentageValue>{stat.percentage}%</PercentageValue>
          </Item>
        ))}
      </StatisticList>
    </StaticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
