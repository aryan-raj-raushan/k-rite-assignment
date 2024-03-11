import { useState } from "react";
import { BrandTableData } from "../../constant/constant";
const useBrandTableHook = ({ setNum, searchInput }) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isBrandChecked, setIsBrandChecked] = useState(false);
  const toggleDescription = (index) => {
    setExpandedRows((prevRows) => {
      const newRows = [...prevRows];
      newRows[index] = !newRows[index];
      return newRows;
    });
  };

  const handleCheckboxChange = (index) => {
    const updatedSelectedBrands = [...selectedBrands];
    if (updatedSelectedBrands.includes(index)) {
      updatedSelectedBrands.splice(updatedSelectedBrands.indexOf(index), 1);
    } else {
      updatedSelectedBrands.push(index);
    }
    setSelectedBrands(updatedSelectedBrands);
    const numSelectedBrands = updatedSelectedBrands.length;
    if (numSelectedBrands > 0) {
      setIsBrandChecked(true);
      console.log(`Number of selected brands: ${numSelectedBrands}`);
      setNum(numSelectedBrands);
    } else {
      setIsBrandChecked(false);
      setNum(null);
    }
  };

  const hanldeCheckBox = () => {
    setSelectedBrands([]);
    setIsBrandChecked(false);
    setNum(null);
  };

  const filteredData = BrandTableData.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchInput.toLowerCase())
    )
  );

  const isDescriptionExpanded = (index) => {
    return expandedRows[index] || false;
  };

  const isAnyDescriptionExpanded = () => {
    return expandedRows.some((row) => row === true);
  };
  return {
    isBrandChecked,
    hanldeCheckBox,
    isAnyDescriptionExpanded,
    filteredData,
    selectedBrands,
    handleCheckboxChange,
    toggleDescription,
    isDescriptionExpanded,
  };
};

export default useBrandTableHook;
