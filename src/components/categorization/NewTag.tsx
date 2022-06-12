import React, { useState } from "react";
import styled from "styled-components";
import { AutoComplete } from "antd";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Input = styled.input`
  width: 80px;
  border-radius: 15px;
  display: block;
  border-style: solid;
  border-color: #3b3bff;
  padding: 4px 8px;
  margin-left: 4px;
`;

const NewTagButton = styled.div`
  padding-left: 4px;
`;

interface Props {
  onAdd: (value: string) => void;
  suggestions?: string[];
}

export const NewTag = ({ onAdd, suggestions }: Props) => {
  const [newTagActivated, setNewTagActivated] = useState(false);
  const [currentInput, setCurrentInput] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [options, setOptions] = useState<{ value: string }[]>();

  const validate = () => suggestions?.includes(currentInput);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.key);
    if (event.key === "Enter" || event.key === "Tab") {
      if (suggestions) {
        const isValid = validate();
        if (!isValid) {
          setIsInvalid(true);
          return;
        }
      }
      onAdd(currentInput);
      setCurrentInput("");
      if (event.key === "Enter") {
        setNewTagActivated(false);
      }
    }
  };

  const onSearch = (searchText: string) => {
    setIsInvalid(false);
    setOptions(
      !searchText
        ? []
        : suggestions
            ?.filter((suggestion) =>
              suggestion
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())
            )
            .map((suggestion) => ({ value: suggestion })) || []
    );
  };

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };
  const renderInput = () => {
    if (suggestions) {
      return (
        <AutoComplete
          options={options}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder="input here"
          onKeyDown={handleKeyDown}
          onChange={(value) => {
            setCurrentInput(value);
            if (!value) {
              setNewTagActivated(false);
            }
          }}
          status={isInvalid ? "error" : ""}
        />
      );
    }
    return (
      <Input
        type="text"
        value={currentInput}
        onChange={(event) => {
          setCurrentInput(event.target.value);
          if (!event.target.value) {
            setNewTagActivated(false);
          }
        }}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    );
  };

  return (
    <Wrapper>
      {newTagActivated && renderInput()}
      <NewTagButton
        onClick={() => {
          setNewTagActivated(true);
        }}
      >
        + New Tag
      </NewTagButton>
    </Wrapper>
  );
};
