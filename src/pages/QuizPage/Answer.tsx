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
                <ListItemText primary={`${props.option}. ${props.text}`} />
            </ListItemButton>
        </ListItem>
    );
};

export default Answer;
