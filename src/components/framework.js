import {Component} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

class Framework extends Component {
    render() {
        return (
            <div className='Framework'>
                <Stack direction="row" spacing={2}>
                    <Button color="secondary">Secondary</Button>
                    <Button variant="contained" color="success">
                        Success
                    </Button>
                    <Button variant="outlined" color="error">
                        Error
                    </Button>
                </Stack>
            </div>
        );
    }
}

export default Framework