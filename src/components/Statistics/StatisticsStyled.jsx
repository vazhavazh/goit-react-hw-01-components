import styled from "@emotion/styled"

export const StaticSection = styled.section`
     padding-top: 30px;
  display: flex;
  background-color: #fff;
  flex-direction: column;
    flex-wrap: wrap;
    width: 400px;
`

export const Title = styled.h2`
    margin-bottom: 30px;
font-size: 30px;
line-height: 1.19;
text-align: center;
color: #202025;
`


export const StatisticList = styled.ul`
  display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    list-style: none;
`

export const Item = styled.li`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 20%;
    background-color: ${props => props.color};
    
`

export const Label = styled.span`
  font-size: 25px;
line-height: 2.25;
text-align: center;
color: white;
`

export const PercentageValue = styled.span`
  font-size: 28px;
line-height: 1.19;
text-align: center;
color: white;
`