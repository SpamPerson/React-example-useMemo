import { Stack } from '@fluentui/react';
import * as React from 'react';

interface IUnsortedWords {
    words:string[];
}

const UnsortedWords:React.FC<IUnsortedWords> = (props) => {
    return (
        <Stack>
            <h2>Unsorted Words</h2>
            <Stack>
                {props.words.map((v,i)=>(
                    <span key={i}>{v}</span>
                ))}
            </Stack>
        </Stack>
    );
}

export default UnsortedWords;