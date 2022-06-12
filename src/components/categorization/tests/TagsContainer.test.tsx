import React from "react";
import renderer from "react-test-renderer";

import { TagsContainer } from "../TagsContainer";

describe("<TagsContainer />", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <TagsContainer
          supplierData={{
            "tags-general": [
              { name: "Example general tag", id: 1, type: "tags-general" },
            ],
            "tags-portfolio": [],
            "tags-certificates": [
              {
                name: "Example certificate tag",
                id: 2,
                type: "tags-certificates",
              },
            ],
          }}
          deleteTag={() => {}}
          addTag={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
