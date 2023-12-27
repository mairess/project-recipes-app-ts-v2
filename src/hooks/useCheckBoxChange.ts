import { useState } from 'react';

function useCheckBoxChange() {
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  const handleCheckboxChange = (ingredient: string) => {
    if (checkedIngredients.includes(ingredient)) {
      setCheckedIngredients((prevChecked) => prevChecked
        .filter((item) => item !== ingredient));
    } else {
      setCheckedIngredients((prevChecked) => [...prevChecked, ingredient]);
    }
  };

  return {
    handleCheckboxChange,
    checkedIngredients,
    setCheckedIngredients,
  };
}

export default useCheckBoxChange;
