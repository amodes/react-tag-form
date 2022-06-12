import React from "react";
import styled from "styled-components";

interface WrapperProps {
  readonly isDeletable?: boolean;
}
const Wrapper = styled.div<WrapperProps>`
  position: relative;
  background-color: #ebecf0;
  border-radius: 18px;
  margin-right: 10px;
  cursor: pointer;
  padding: ${(props) => (props.isDeletable ? "6px 30px 6px 10px" : "6px 10px")};
  :hover {
    .close-icon {
      display: flex;
    }
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  display: none;
  justify-content: center;
  right: 10px;
  top: 5px;
`;

interface Props {
  name: string;
  isDeletable: boolean;
  onDelete: () => void;
}

export const Tag = ({ name, isDeletable, onDelete }: Props) => {
  return (
    <Wrapper isDeletable={isDeletable}>
      {name}
      {isDeletable && (
        <CloseIcon onClick={onDelete} className="close-icon">
          x
        </CloseIcon>
      )}
    </Wrapper>
  );
};
