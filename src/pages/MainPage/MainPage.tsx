import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography
} from '@mui/material';
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

const MainPage = () => {
    return (
        <PageLayout>
            <PageHeader heading="Baza na rozległe" />
            <Grid container columns={3} spacing={4} justifyContent="center">
                <Grid item xs={1}>
                    <Link to="/questions">
                        <Card sx={{ height: '100%' }}>
                            <CardHeader title="Przeglądaj pytania" />
                            <CardContent>
                                <Typography>
                                    Wszystkie pytania z bazy
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to="/quiz">
                        <Card sx={{ height: '100%' }}>
                            <CardHeader title="Quiz" />
                            <CardContent>
                                <Typography>
                                    Przezczytaj pytanie i wybierz prawidłową
                                    odpowiedź
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={1}>
                    <Card sx={{ height: '100%' }}>
                        <CardHeader title="dupa" />
                        <CardContent>
                            <Typography>coś tu kiedyś dam</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </PageLayout>
    );
};
export default MainPage;
