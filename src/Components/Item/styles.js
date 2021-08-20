import { makeStyles } from "@material-ui/core";
export default makeStyles((theme)=>({
    actions : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        [theme.breakpoints.down('xs')]:{
            flexDirection : 'column'
        }
    }
}))