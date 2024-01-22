import { forwardRef } from 'react';
import { Stack, StackProps } from '@mui/material';

const PageLayout = forwardRef<HTMLDivElement, StackProps>(
    ({ children, ...props }, ref) => {
        return (
            <Stack>
                <Stack ref={ref} {...props} alignItems="center">
                    {children}
                </Stack>
            </Stack>
        );
    }
);

export default PageLayout;
