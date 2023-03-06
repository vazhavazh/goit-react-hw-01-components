import styled from '@emotion/styled';

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  background-color: white;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  width: 100%;
  padding-bottom: 16px;
  padding-top: 16px;
  padding-left: 8px;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
      1px 4px 6px rgb(0 0 0 / 16%);
  }
`;

export const Status = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.status ? 'rgb(30, 128, 0)' : '#ed0505')};
`;

//  background-color: rgb(30, 128, 0);
//   background-color: #ed0505;

export const Avatar = styled.img`
  display: block;
  margin-right: 10px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 24px;
`;
