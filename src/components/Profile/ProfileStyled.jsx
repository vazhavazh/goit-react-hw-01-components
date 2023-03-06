import styled from '@emotion/styled'

export const Card = styled.div`
 padding: 40px 32px 24px;
    background-color: #FCFCFC;
    box-shadow: 0px 8px 30px rgba(212, 20, 67, 0.1);
    border-radius: 24px;
    width: 100%;
    margin: 0 auto;
     max-width: 280px;
     max-height: 412px;
     margin-bottom: 15px;
@media screen and (min-width: 768px) {
  max-width: 224px;
 max-height: 537px;
}
@media screen and (min-width: 1200px) {
max-height: 542px;
}
`
export const Frame1 = styled.div`
    position: relative;
  height: 85px;
  overflow: hidden;
`

export const Frame2 = styled.div`
  position: absolute;
width: 85px;
height: 85px; 
background: #6E6E6E;
border-radius: 44px;
  overflow: hidden;
    top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`


export const UserMainTextStyled = styled.p`
        text-align: center;
    letter-spacing: 0.04em;
    color: #131313;
    font-size: 18px;
    font-weight: 400;
    line-height: 176%;
`

export const ContainerDetailsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    gap: 12px;
    margin-bottom: 20px;
`



export const UserNameStyled = styled.p`
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #131313;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
`
export const StatsListStyled = styled.ul`
        margin: 0;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;

`


export const StatItemStyled = styled.li`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
   min-width: 25%;
       border-radius: 10px;
`


export const StatValueStyled = styled.span`
    text-align: center;
    text-transform: uppercase;
    color: black;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.22222;
`