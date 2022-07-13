import React from "react";
import { Stack } from "@fluentui/react/lib/Stack";
import "./App.css";
import Wrapper from "./components/not_useMemo/Wrapper";
import MemoWrapper from "./components/useMemo/Wrapper";
import { DefaultButton } from "@fluentui/react";

export const App: React.FC = () => {
   const [isMemo, setIsMemo] = React.useState<boolean>(false);

   return (
      <Stack>
         <Stack.Item>
            <DefaultButton
               text={isMemo ? "useMemo" : "notUseMemo"}
               onClick={() => {
                  setIsMemo(!isMemo);
               }}
            />
         </Stack.Item>
         <Stack.Item hidden={isMemo}>
            <Wrapper />
         </Stack.Item>
         <Stack.Item hidden={!isMemo}>
            <MemoWrapper />
         </Stack.Item>
      </Stack>
   );
};
