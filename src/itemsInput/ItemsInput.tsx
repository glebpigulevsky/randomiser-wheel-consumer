import React, { useState, useCallback } from "react";

export const ItemsInput = ({
  items,
  setItems,
}: {
  items: Array<string>;
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [inputValue, setInputValue] = useState<string | null>(null);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    [setInputValue]
  );

  const onButtonClick = useCallback(() => {
    if (inputValue !== null) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  }, [setItems, items, inputValue]);

  return (
    <>
      <input onChange={onInputChange} value={inputValue as string} />
      <button onClick={onButtonClick}>add item</button>
      {items.map((items) => (
        <div>{items}</div>
      ))}
    </>
  );
};
