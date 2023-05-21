import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;

  max-width: 100%;
  width: 360px;

  border-radius: ${props => props.theme.radiuses.medium};
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: ${props => props.theme.colors.background};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;

  border-radius: 50%;
`;

export const Info = styled.p`
  color: ${props => props.theme.colors.accent};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.m};
`;

export const Name = styled(Info)`
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: 500;
`;

export const Tag = styled(Info)`
  color: ${props => props.theme.colors.primary};
`;

export const Location = styled(Info)`
  color: ${props => props.theme.colors.secondary};
`;

export const StatisticsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.space[4]}px;
  width: 100%;
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
`;

export const Label = styled(StatsInfo)`
  font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
  color: ${props => props.theme.colors.secondary};
  text-shadow: 1px 1px 1px #fff;
  font-weight: ${props => props.theme.fontWeights.bold};
`;
