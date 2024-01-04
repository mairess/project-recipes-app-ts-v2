import { useState } from 'react';
import FoodContext from './FoodContext';
import { DoneRecipesType, DrinkCategoryType, MealCategoryType,
  FavoriteType } from '../types';

type FilterProviderProps = {
  children: React.ReactNode,
};

function FoodProvider({ children }: FilterProviderProps) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [filter, setFilter] = useState('');
  const [filterDone, setFilterDone] = useState('All');
  const [alertShown, setAlertShown] = useState(false);
  const [categoryResults, setCategoryResults] = useState<
  MealCategoryType[] | DrinkCategoryType[]>([]);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null | undefined>(null);
  const [doneRecipes, setDoneRecipes] = useState<DoneRecipesType[]>([]);
  const [
    contentToRender,
    setContentToRender,
  ] = useState<FavoriteType[] | DoneRecipesType[]>([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleFilterChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = target.value;
    setFilter(newFilter);
  };

  const handleCheckboxChange = (ingredient: string) => {
    if (checkedIngredients.includes(ingredient)) {
      setCheckedIngredients((prevChecked) => prevChecked
        .filter((item) => item !== ingredient));
    } else {
      setCheckedIngredients((prevChecked) => [...prevChecked, ingredient]);
    }
  };

  const copyToClipboard = (shareLink: string, index?: number) => {
    const currentUrl = window.location.href;
    const inProgressUrl = currentUrl.slice(0, currentUrl.lastIndexOf('/'));

    setIsLinkCopied(true);
    setCopiedIndex(index);
    if (currentUrl.includes('in-progress')) {
      navigator.clipboard.writeText(inProgressUrl);
    } else if (currentUrl.includes('done-recipes')
    || currentUrl.includes('favorite-recipes')) {
      navigator.clipboard.writeText(shareLink);
    } else {
      navigator.clipboard.writeText(currentUrl);
    }
    setTimeout(() => {
      setIsLinkCopied(false);
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <FoodContext.Provider
      value={ {
        mail,
        setMail,
        isFormValid,
        setIsFormValid,
        setIsButtonClicked,
        isButtonClicked,
        filter,
        setFilter,
        handleFilterChange,
        setAlertShown,
        alertShown,
        categoryResults,
        setCategoryResults,
        handleCheckboxChange,
        checkedIngredients,
        setCheckedIngredients,
        copyToClipboard,
        isLinkCopied,
        setCopiedIndex,
        copiedIndex,
        doneRecipes,
        setDoneRecipes,
        filterDone,
        setFilterDone,
        contentToRender,
        setContentToRender,
        showSearchBar,
        setShowSearchBar,
      } }
    >
      {children}
    </FoodContext.Provider>
  );
}

export default FoodProvider;
