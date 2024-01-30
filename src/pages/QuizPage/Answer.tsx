import {
    Checkbox,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { option } from '../ViewQuestionsPage/hooks/useQuestions';
import { useState } from 'react';

type AnswerProps = {
    option: option;
    text: string;
    correct: boolean;
    showCorrect?: boolean;
};

const Answer = (props: AnswerProps) => {
    const [checked, setChecked] = useState(false);
    return (
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked}
                        disableRipple
                        onChange={() => setChecked(!checked)}
                    />
                </ListItemIcon>

                {props.showCorrect && props.correct ? (
                    <ListItemText
                        primary={`${props.option}. ${props.text}`}
                        style={{ color: '#118605' }}
                    />
                ) : (
                    <ListItemText primary={`${props.option}. ${props.text}`} />
                )}
            </ListItemButton>
        </ListItem>
    );
};

export default Answer;
