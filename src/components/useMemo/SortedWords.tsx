import { Stack } from "@fluentui/react";
import * as React from "react";


interface ISortedWords {
    words:string[];
}

const delay = (ms:number) => {
    const now = new Date().getTime();
    while (new Date().getTime() < now + ms) {}
}

const SortedWords: React.FC<ISortedWords> = (props) => {

    const sortWords = () => {
        console.log('sortWords');
        delay(500);
        return props.words.sort();
    }

    const sortedWords = React.useMemo(sortWords, [props.words]);

    return (
        <Stack>
            <h2>Sorted Words</h2>
            <Stack>
                {sortedWords.map((v,i)=>(
                    <span key={i}>{v}</span>
                ))}
            </Stack>
        </Stack>
    );
};

export default SortedWords;
