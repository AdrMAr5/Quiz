import PageLayout from '../../components/PageLayout';
import PageHeader from '../../components/PageHeader';
import useQuestions, { answer } from './hooks/useQuestions';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    FormControlLabel,
    Grid,
    List,
    MenuItem,
    Select,
    SelectChangeEvent
} from '@mui/material';
import { useState } from 'react';
import Answer from '../QuizPage/Answer';

const ViewQuestionsPage = () => {
    const questions = useQuestions();
    const [chapter, setChapter] = useState(2);
    const [showCorrect, setShowCorrect] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const [shuffleAnswers, setShuffleAnswers] = useState(false);

    const count2 = questions.filter((obj) => obj.chapter === 2).length;
    const count3 = questions.filter((obj) => obj.chapter === 3).length;
    const count4 = questions.filter((obj) => obj.chapter === 4).length;
    const count6 = questions.filter((obj) => obj.chapter === 6).length;
    const count8 = questions.filter((obj) => obj.chapter === 8).length;
    console.log(
        ', 2:',
        count2,
        ', 3:',
        count3,
        ', 4: ',
        count4,
        ', 6: ',
        count6,
        ', 8: ',
        count8
    );
    const handleChange = (event: SelectChangeEvent) => {
        setChapter(Number(event.target.value));
    };
    const shuffle = (array: answer[]) => {
        let currentIndex = array.length,
            randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex]
            ];
        }

        return array;
    };
    return (
        <PageLayout>
            <>
                <PageHeader heading="Pytania z bazy" />
                <Select onChange={handleChange} defaultValue="2">
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={() => setShowCorrect(!showCorrect)}
                            checked={showCorrect}
                        />
                    }
                    label="pokaż poprawne"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={() => setShowComment(!showComment)}
                            checked={showComment}
                        />
                    }
                    label="pokaż wyjaśnienia"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={() => setShuffleAnswers(!shuffleAnswers)}
                            checked={shuffleAnswers}
                        />
                    }
                    label="mieszaj odpowiedzi"
                />

                <Grid container rowGap={4} columns={1} maxWidth="60%">
                    {questions.map((question) => {
                        {
                            shuffleAnswers
                                ? shuffle(question.answers)
                                : undefined;
                        }
                        return question.chapter === chapter ? (
                            <Grid xs={1}>
                                <Card>
                                    <CardHeader
                                        title={question.question}
                                    ></CardHeader>
                                    <CardContent>
                                        <List>
                                            {question.answers.map((v) => {
                                                return (
                                                    <Answer
                                                        option={v.option}
                                                        text={v.text}
                                                        correct={
                                                            question.correct.indexOf(
                                                                v.option
                                                            ) !== -1
                                                        }
                                                        showCorrect={
                                                            showCorrect
                                                        }
                                                    />
                                                );
                                            })}
                                            {showComment ? (
                                                <p>
                                                    komentarz:{' '}
                                                    {question.comment}
                                                </p>
                                            ) : null}
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
