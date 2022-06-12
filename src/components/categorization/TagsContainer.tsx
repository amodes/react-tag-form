import React from "react";

import { TagRow } from "./TagRow";
import { SupplierData } from "./interfaces";
import {
  suggestedTagsCertifications,
  suggestedTagsPortfolio,
} from "./dummyData";

interface Props {
  supplierData: SupplierData | null;
  deleteTag: (type: keyof SupplierData, index: number) => void;
  addTag: (type: keyof SupplierData, value: string) => void;
}

export const TagsContainer = ({ supplierData, deleteTag, addTag }: Props) => {
  return (
    <>
      <TagRow
        title="General"
        tags={supplierData?.["tags-general"].map((entry) => entry.name) || []}
        type="tags-general"
        deleteTag={deleteTag}
        addTag={addTag}
      />
      <TagRow
        title="Portfolio"
        tags={supplierData?.["tags-portfolio"].map((entry) => entry.name) || []}
        type="tags-portfolio"
        deleteTag={deleteTag}
        addTag={addTag}
        suggestions={suggestedTagsPortfolio}
      />
      <TagRow
        title="Certificates"
        tags={
          supplierData?.["tags-certificates"].map((entry) => entry.name) || []
        }
        type="tags-certificates"
        deleteTag={deleteTag}
        addTag={addTag}
        suggestions={suggestedTagsCertifications}
      />
    </>
  );
};
