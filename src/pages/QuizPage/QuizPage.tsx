import PageLayout from '../../components/PageLayout';
import PageHeader from '../../components/PageHeader';
import {
    Button,
    ButtonGroup,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Checkbox,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import { useState } from 'react';
import useQuestions from '../ViewQuestionsPage/hooks/useQuestions';
import Answer from './Answer';

const ViewQuestionsPage = () => {
    const questions = useQuestions();

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
    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [checked, setChecked] = useState([false, false]);

    const evaluateAnswers = () => {
        console.log('dupa');
    };

    return (
        <PageLayout>
            <>
                <PageHeader heading="Rozwiąż quiz" />
                <Grid container rowGap={4} columns={3} maxWidth="60%">
                    <Grid item xs={3}>
                        <Card>
                            <CardHeader
                                title={questions[currentQuestion].question}
                            ></CardHeader>
                            <CardContent>
                                <List>
                                    {questions[currentQuestion].answers.map(
                                        (v) => {
                                            return (
                                                <></>
                                                // <Answer
                                                //     text={v.text}
                                                //     option={v.option}
                                                // />
                                            );
                                        }
                                    )}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={1}>
                        <ButtonGroup>
                            <Button onClick={evaluateAnswers}>
                                Sprawdź odpowiedź
                            </Button>
                            <Button onClick={nextQuestion}>Dalej</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </>
        </PageLayout>
    );
};
export default ViewQuestionsPage;
