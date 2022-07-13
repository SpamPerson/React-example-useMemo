import * as React from "react";

import { PrimaryButton, TextField } from "@fluentui/react";
import { Stack } from "@fluentui/react/lib/Stack";
import UnsortedWords from "./UnsortedWords";
import SortedWords from "./SortedWords";

const Wrapper: React.FC = () => {
   const [words, setWords] = React.useState<string[]>([]);
   const [word, setWord] = React.useState<string>("");

   const onClickAdd = () => {
      setWords([...words, word]);
      setWord("");
   };

   return (
      <Stack>
         <h1 style={{textAlign:'center'}}>Not useMemo</h1>
         <Stack tokens={{ childrenGap: 20 }} horizontal style={{ padding: 10 }}>
            <Stack.Item style={{width:'50%',padding:'20px'}}>
               <UnsortedWords words={words} />
            </Stack.Item>
            <Stack.Item style={{width:'50%',padding:'20px'}}>
               <SortedWords words={words} />
            </Stack.Item>
         </Stack>
         <Stack tokens={{ childrenGap: 10 }} horizontal horizontalAlign="center">
            <TextField value={word} onChange={(e, v) => setWord(v!)} placeholder="word" />
            <PrimaryButton text="Add" onClick={onClickAdd} />
         </Stack>
      </Stack>
   );
};

export default Wrapper;
