import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactMarker = styled.span`
  width: 5px;
  height: 5px;
  background-color: #000;
  border-radius: 50%;
`;

export const ContactText = styled.p`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 7px;
  font-size: 18px;
  font-weight: 500;
`;

export const BtnDelete = styled.button`
  width: 100px;
  height: 22px;
  font-size: 14px;
  border-radius: 4px;
  border: 0.5px solid #000;
  background-color: transparent;
  transition-property: background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #408dadb5;
    border-color: transparent;
    box-shadow: 0 5px 5px rgb(0 0 0 / 20%);
  }
`;
