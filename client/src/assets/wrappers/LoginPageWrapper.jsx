import { Box, TextField, styled } from "@mui/material";

export const WrapperMainBox = styled(Box)({
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)',
    borderTop: '8px solid navy',
    maxWidth: '400px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    background: 'white',
    height: '70vh',
    marginTop: '5%',
    padding: '0px 1%',
    '@media (max-width: 600px)': {
        width: '400px',
        height: '62vh',
        marginTop: '35%',
        padding: '0px 1%',
    },
})

export const CenterBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f3f2f2d0',
    height: '100vh'
})

export const WrapperTextFeild = styled(TextField)({

})