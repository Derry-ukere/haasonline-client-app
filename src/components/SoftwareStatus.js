import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ConstructionTwoToneIcon from '@mui/icons-material/ConstructionTwoTone';


// ----------------------------------------------------------------------

Logo.propTypes = {
    disabledLink: PropTypes.bool,
    sx: PropTypes.object,
};

export default function Logo({ status }) {

    const maintenance = (
        <ConstructionTwoToneIcon />
    );

    const running = (
        <CircularProgress
            variant="indeterminate"
            color='success'
            size={40}
            thickness={10}
        />
    );

    const pending = (
        <AccessTimeIcon size="small" />
    );

    if (status === "maintenance") {
        return <>{maintenance}</>;
    }

    if (status === "running") {
        return <>{running}</>;
    }

    return <Box>{pending}</Box>;
}