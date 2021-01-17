import React from 'react'
import { connect } from "react-redux";
import { actions } from "../../redux/action";
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import '../../App.css';



//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function ProductOnPageCategory(props) {
    const { classes } = props

    return (
        <>
            <h1>welcome !!!!!</h1>
            {/* <FormLabel className={classes.textcontect}>Border Radius Frame</FormLabel> */}

            <FormLabel className={props.textcontect}>Border Radius Frame</FormLabel>
            <br></br>
            <Box flexDirection="row"
                display="flex"
                justifyContent="space-between"
            >
                <Box
                    width={'100%'}
                    alignSelf="center"
                >
                    <Slider
                        defaultValue={props.homeStoreDesign.BorderRadius.producFrametOnPageCategory}
                        step={1}
                        marks
                        min={0}
                        max={100}
                        getAriaValueText={props.cahngeBorderRadius}
                        valueLabelDisplay="auto"
                        // className={classes.MuiSlider_root}
                        className={props.MuiSlider_root}
                    />
                </Box>
                <Box justifyContent="flex-end">
                    <input
                        textAlign="center"
                        id="standard-number"
                        type="number"
                        value={props.homeStoreDesign.BorderRadius.producFrametOnPageCategory ? props.homeStoreDesign.BorderRadius.producFrametOnPageCategory : '0'}
                        defaultValue={props.homeStoreDesign.BorderRadius.producFrametOnPageCategory}
                        onChange={(e) => props.cahngeBorderRadius(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={props.inputNumberSlider}
                    // className={classes.inputNumberSlider}

                    />
                </Box>
            </Box>
            <br></br>

        </>
    )
}
const mapStateToProps = (state) => {
    return {
        //אפשר לקרוא שם אחר לאוביקט
        homeStoreDesign: state.editHomeStoreReducer.homeStoreDesign,

    }
}
const mapDispatchToProps = (dispatch) => ({
    cahngeBorderRadius: (frame) => dispatch(actions.setBorderRadius({ key: "producFrametOnPageCategory", frame })),


})
export default connect(mapStateToProps, mapDispatchToProps)(ProductOnPageCategory);


/////////////////////////////


