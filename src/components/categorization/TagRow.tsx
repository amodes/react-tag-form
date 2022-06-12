import React from "react";
import styled from "styled-components";

import { SupplierData } from "./interfaces";
import { Tag } from "./Tag";
import { NewTag } from "./NewTag";

interface Props {
  title: string;
  tags: string[];
  type: keyof SupplierData;
  deleteTag: (type: keyof SupplierData, index: number) => void;
  addTag: (type: keyof SupplierData, value: string) => void;
  suggestions?: string[];
}

const Wrapper = styled.div`
  padding-bottom: 20px;
`;

const Title = styled.div`
  color: #6c6c6c;
`;
const TagsContainer = styled.div`
  display: flex;
`;

export const TagRow = ({
  title,
  tags,
  type,
  deleteTag,
  addTag,
  suggestions,
}: Props) => {
  const handleDelete = (index: number) => {
    deleteTag(type, index);
  };

  const handleAdd = (value: string) => {
    addTag(type, value);
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag
            name={tag}
            isDeletable={index !== 0}
            key={index}
            onDelete={() => {
              handleDelete(index);
            }}
          />
        ))}
        <NewTag onAdd={handleAdd} suggestions={suggestions} />
      </TagsContainer>
    </Wrapper>
  );
};
