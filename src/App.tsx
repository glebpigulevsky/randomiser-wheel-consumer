import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import spinner from "spinner/spinnerWrapper";

import "./index.scss";
import { ItemsInput } from "./itemsInput/ItemsInput";

const App = () => {
  const divRef = useRef(null);
  const [items, setItems] = useState<Array<string>>([]);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    spinner(divRef.current, items, isReady);
  }, [isReady, items]);

  const onReadyClick = useCallback(() => {
    setIsReady(true);
  }, [setIsReady, isReady]);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Randomiser</div>
      <button onClick={onReadyClick}>set Ready</button>
      <ItemsInput items={items} setItems={setItems} />

      <div ref={divRef}></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
