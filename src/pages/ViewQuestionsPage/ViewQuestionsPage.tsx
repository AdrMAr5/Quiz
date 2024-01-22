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
    ListItemText
} from '@mui/material';

const ViewQuestionsPage = () => {
    const questions = useQuestions();
    console.log(questions);
    return (
        <PageLayout>
            <>
                <PageHeader heading="Pytania z bazy" />
                <Grid container rowGap={4} columns={1} maxWidth="60%">
                    {questions.map((value) => {
                        return (
                            <Grid xs={1}>
                                <Card>
                                    <CardHeader
                                        title={value.question}
                                    ></CardHeader>
                                    <CardContent>
                                        <List>
                                            {value.answers.map((v) => {
                                                return (
                                                    <ListItem>
                                                        <ListItemText
                                                            primary={`${v.option}. ${v.text}`}
                                                        />
                                                    </ListItem>
                                                );
                                            })}
                                        </List>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </>
        </PageLayout>
    );
};
export default ViewQuestionsPage;
