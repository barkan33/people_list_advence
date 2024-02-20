import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
    return (
        <Stack style={{ position: 'absolute',top: 0 }} sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">You must fill in a name</Alert>
        </Stack>
    );
}