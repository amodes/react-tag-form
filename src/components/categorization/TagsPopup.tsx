import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";

import { supplier } from "./dummyData";
import { SupplierData } from "./interfaces";

import { TagsContainer } from "./TagsContainer";

export const TagsPopup = () => {
  const [supplierData, setSupplierData] = useState<SupplierData | null>(null);
  const [name, setName] = useState<string>("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // I assume in reality data needs to be fetched from server first.
    // We could do it in this useEffect.
    const exampleData = supplier as any;
    setName(exampleData.name);
    const exampleDataCopy = { ...exampleData };
    delete exampleDataCopy.name;
    setSupplierData(exampleDataCopy);
  }, []);

  const deleteTag = (type: keyof SupplierData, index: number) => {
    if (!supplierData) {
      return;
    }
    const supplierCopy = { ...supplierData };
    supplierCopy[type]?.splice(index, 1);

    setSupplierData(supplierCopy);
  };

  const addTag = (type: keyof SupplierData, value: string) => {
    if (!supplierData) {
      return;
    }
    const supplierCopy = { ...supplierData };
    supplierCopy[type].push({ name: value, type });
    setSupplierData(supplierCopy);
  };

  const handleOk = () => {
    setShowModal(false);
    // Make post request to server with supplierData as payload
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Add tags
      </Button>
      <Modal
        title={name}
        visible={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
        width="80%"
      >
        <TagsContainer
          deleteTag={deleteTag}
          addTag={addTag}
          supplierData={supplierData}
        />
      </Modal>
    </>
  );
};
