import PageLayout from '../../components/PageLayout';
import PageHeader from '../../components/PageHeader';
import useQuestions from './hooks/useQuestions';
import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent
} from '@mui/material';
import { useState } from 'react';
import Answer from '../QuizPage/Answer';
import SelectInput from '@mui/material/Select/SelectInput';

const ViewQuestionsPage = () => {
    const questions = useQuestions();
    const [chapter, setChapter] = useState(2);

    const count2 = questions.filter((obj) => obj.chapter === 2).length;
    const count3 = questions.filter((obj) => obj.chapter === 3).length;
    const count4 = questions.filter((obj) => obj.chapter === 4).length;
    const count6 = questions.filter((obj) => obj.chapter === 6).length;
    console.log(
        ', 2:',
        count2,
        ', 3:',
        count3,
        ', 4: ',
        count4,
        ', 6: ',
        count6
    );
    const handleChange = (event: SelectChangeEvent) => {
        setChapter(Number(event.target.value));
    };
    return (
        <PageLayout>
            <>
                <PageHeader heading="Pytania z bazy" />
                <Select onChange={handleChange}>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>
                <Grid container rowGap={4} columns={1} maxWidth="60%">
                    {questions.map((value) => {
                        return value.chapter === chapter ? (
                            <Grid xs={1}>
                                <Card>
                                    <CardHeader
                                        title={value.question}
                                    ></CardHeader>
                                    <CardContent>
                                        <List>
                                            {value.answers.map((v) => {
                                                return (
                                                    <Answer
                                                        option={v.option}
                                                        text={v.text}
                                                    />
                                                );
                                            })}
                                        </List>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ) : null;
                    })}
                </Grid>
            </>
        </PageLayout>
    );
};
export default ViewQuestionsPage;
