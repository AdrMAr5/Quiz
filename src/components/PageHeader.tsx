import { Typography } from '@mui/material';

type PageHeaderProps = {
    heading: string;
};
const PageHeader = (props: PageHeaderProps) => {
    return <Typography variant="h1">{props.heading}</Typography>;
};
export default PageHeader;
