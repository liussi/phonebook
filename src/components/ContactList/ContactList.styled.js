import styled from '@emotion/styled';

export const ContactListWrapper = styled.div`
  text-align: center;
`;

export const ContactListItem = styled.li`
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ContactName = styled.span`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
  margin-right: 10px;
`;

export const ContactNumber = styled.span``;

export const DeleteButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  flex-shrink: 0;
  margin-left: 10px;
  
  &:hover {
    background-color: #ff4f4f;
  }
`;

