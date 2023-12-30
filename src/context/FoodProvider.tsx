import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FoodContext from './FoodContext';
import { DoneRecipesType, DrinkCategoryType, MealCategoryType } from '../types';

type FilterProviderProps = {
  children: React.ReactNode,
};

function FoodProvider({ children }: FilterProviderProps) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');
  const [filterDone, setFilterDone] = useState('All');
  const [alertShown, setAlertShown] = useState(false);
  const [categoryResults, setCategoryResults] = useState<
  MealCategoryType[] | DrinkCategoryType[]>([]);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null | undefined>(null);
  const [doneRecipes, setDoneRecipes] = useState<DoneRecipesType[]>([]);

  const handleNavigation = (path: string) => {
    setIsButtonClicked(false);
    navigate(path);
  };

  const handleSubmit = ({
    email,
    validation,
    pathname,
    label,
    id,
  }: {
    email: string;
    validation: boolean;
    pathname: string;
    label: string;
    id: string;
  }) => {
    if (pathname === '/') {
      localStorage.setItem('user', JSON.stringify({ email }));
    }
    if (validation) {
      setIsButtonClicked(validation);

      setTimeout(() => {
        if (pathname.includes('in-progress')) {
          handleNavigation('/done-recipes');
        } else if (label === 'Start Recipe') {
          const recipePath = pathname.includes('/meals') ? '/meals' : '/drinks';
          handleNavigation(`${recipePath}/${id}/in-progress`);
        }
        setIsButtonClicked(false);
      }, 1000);
    }
  };

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
    } else if (currentUrl.includes('done-recipes')) {
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
        handleSubmit,
        filter,
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
      } }
    >
      {children}
    </FoodContext.Provider>
  );
}

export default FoodProvider;
