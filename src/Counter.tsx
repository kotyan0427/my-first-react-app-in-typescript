import { useEffect, useRef, useState } from "react";

export const Counter: React.VFC<{}> = () => {
  const [value, setValue] = useState<number>(0);
  const refTimes = useRef<number>(0);
  useEffect(() => {
    refTimes.current = refTimes.current + 1;
  });

  const ref = useRef<HTMLInputElement>(null);

  const increment = () => {
    setValue((prev) => prev + 1);
  };

  const decrement = () => {
    setValue((prev) => prev - 1);
  };

  const focusInput = () => {
    ref.current!.focus();
  };

  return (
    <div>
      <div>value:{value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {refTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click me!</button>
    </div>
  );
};
