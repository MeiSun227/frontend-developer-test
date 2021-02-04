
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        margin: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',

    },
    placeholder: {
        height: 40,
    },
    box: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    table: {
        minWidth: 340,
    },
    tableCell: {
        paddingRight: 3,
        paddingLeft: 2
    }
}));

export default useStyles