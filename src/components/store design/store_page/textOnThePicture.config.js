import React, { Component } from 'react'
import { connect } from 'react-redux';
// import './Logo.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Switch from '@material-ui/core/Switch';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Slider from '@material-ui/core/Slider';
import { HuePicker } from 'react-color';
import { actions } from "../../redux/action";
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import clsx from 'clsx';
const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);


const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        overflowX: 'hidden !important',
        '& .PrivateValueLabel-circle': {

            display: 'none'

        },
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none"
        }
    },

    Logo_root_37: {
        background_color: '#4d5358'
    },
    MuiSlider_root: {
        color: '#fafafa',
        width: '92%',
        cursor: 'pointer',
        height: '2px',
        display: 'inline_block',
        padding: '13px 0',
        position: 'relative',
        box_sizing: 'content_box',
        touch_action: 'none',
        _webkit_tap_highlight_color: 'transparent'
    },
    textField: {
        width: 200,
        // height: 19,
        textAlign: 'left',
        color: '#787880',
        opacity: 1,
    },

    checkbox: {
        borderColor: '#5E81F4'
    },
    p_Publiceveryonecansee: {
        top: 0,
        left: -70,
        // width: 100,
        height: 10,
        // textAlign: 'left',
        font: 'Bold 14px/19px Roboto',
        // letterSpacing: 0.17,
        color: '#1C1D21',
        opacity: 1,
    },
    p_editby: {
        top: 60,
        left: -100,
        textAlign: 'left',
        font: 'Regular 14px/21px Roboto',
        letterSpacing: ' 0.2px',
        color: ' #787880',
        opacity: 1
    },
    i_text_description: {
        top: 252,
        left: 1276,
        width: 292,
        height: 94,
        textAlign: 'left',
        letterSpacing: 0,
        opacity: 1
    },
    icon_upload: {
        fontSize: 100,
        textAlign: 'left',
        //    width:13
    },
    icon_clander: {
        textAlign: 'left'
    },
    list1: {
        fontSize: 'smaller',
        paddingTop: 1
    },
    drawer: {
        backgroundColor: '#3A405E'
    },

    RoundedUp: {

        borderRadius: ' 50px 0px 0px 0px '
    },
    fieldTextStyle: {
        textAlign: 'left',
        font: 'Light 40px/40px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
    },

    textcontect: {
        color: 'white',
        margin: '1%',

    },
    toolbar: {
        paddingRight: '0px',

    },
    multilineColor: {
        color: 'white'
    },
    form: {
        margin: 'auto'
    },
    button: {
        color: 'white',
        margintTop: '60%',
        borderRadius: '290px'
    },
    textarea: {
        backgroundColor: '#3A405E'
    },

    div: {
        textAlign: 'center',
        backgroundColor: 'lightslategrey',
        // borderStyle: 'solid',
        width: 124,
        height: 104
    },
    iconVideUp:
    {
        fontSize: 50,
        textAlign: 'center',
    },
    hue_horizontal:
    {
        padding: '0px 2px',
        position: 'relative',
        height: '100%',
        border_radius: ' 2px',
        width: '60%'
    },
    iconVideUp1:
    {
        fontSize: 50,
        textAlign: 'center',
    },

    inputNumber:
    {
        width: '30px',
        display: 'inline_block',
        textAlign: 'left',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
    },
    inputNumberSlider:
    {
        width: '30px',
        display: 'inline_block',
        textAlign: 'center',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
        // '-webkit-appearance': 'none',
        // margin:0
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200
    },
    row1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200
    },
    createNewPage: {
        paddingRight: '5%',
        paddingLeft: '5%',
        position: 'sticky',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: "5vh",
    },
    titleSettings: {
        color: '#b6b6c9',
        fontSize: '13px',
        paddingLeft: '8%',
        marginTop: '10px'
    }
});
class TextOnThePicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgcolrPNG: '#fffff',
            checkedSwitch: false,
            IsCollapse: false

        }
    }
    handleChangeSwitch = () => {
        ;
        this.props.changeTitleYOrN()
    }
    IsOpenCollapse = () => {
        this.setState({
            IsCollapse: !this.state.IsCollapse
        })
    }


    useStyle = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            },
        },
    }));
    handleChangeComplete = (color) => {
        this.setState({ bgcolrPNG: color.hex });
    };
    changeTextSizein = (e) => {
        ;
        this.props.changeTextSize(e)
    }


    changeTitleColorText = (color) => {
        ;
        this.props.changeTitleColorText(color.hex)
    }
    onChangeHandlerImage(event) {
        let reader = new FileReader();
        reader.onloadend = () => {
            this.props.changeLogo(reader.result)
        }
        reader.readAsDataURL(event)
    }
    render() {
        const { classes } = this.props
        const defaultProps3 = {
            color: 'white'
        }
        return (
            <>
                <div className={classes.root}>
                    <FormControl component="fieldset" className={clsx(classes.textField, 'con', 'vertical-center')} style={{ height: 73 + "vh", width: 100 + "%" }}  >
                        <FormGroup className={classes.textField} >
                            {this.state.IsCollapse ?
                                <div className={classes.row1}  >
                                    <h3 edge="end" className={classes.titleSettings}>  Title Setting  </h3>
                                    <div edge="start" >
                                        <label for="ColapseLogo">
                                            <KeyboardArrowUpIcon />
                                        </label>
                                        <input
                                            type={"button"}
                                            id="ColapseLogo"
                                            htmlFor="myInput"
                                            style={{ display: 'none' }}
                                            onClick={this.IsOpenCollapse}
                                        />
                                    </div>
                                </div>
                                :
                                <div className={classes.row} >
                                    <h3 edge="end" className={classes.titleSettings}>  Title Setting  on the picture  </h3>
                                    <div edge="start">
                                        <label for="ColapseLogo">
                                            <KeyboardArrowDownIcon />
                                        </label>
                                        <input
                                            type={"button"}
                                            id="ColapseLogo"
                                            htmlFor="myInput"
                                            style={{ display: 'none' }}
                                            onClick={this.IsOpenCollapse}
                                        />
                                    </div>
                                </div>
                            }
                            <div hidden={this.state.IsCollapse} style={{ width: 94 + "%", marginRight: 3 + "%", marginLeft: 3 + "%" }}>
                                <Grid
                                    container
                                    direction="column"
                                    justify="space-between"

                                >


                                    <br></br>
                                    <br></br>

                                    <Box flexDirection="row"
                                        display="flex"
                                        justifyContent="space-between"
                                    >
                                        <Box
                                            width={'80%'}
                                        >
                                            <FormLabel className={classes.textcontect}>Text title</FormLabel>
                                        </Box>
                                        <Box justifyContent="flex-end">
                                            <AntSwitch checked={this.props.homeStoreDesign.titleYOrN} onClick={this.handleChangeSwitch} name="checkedSwitch" />
                                        </Box>
                                    </Box>
                                    <input type="text"
                                        width={2}
                                        InputProps={{ className: classes.multilineColor }}
                                        onChange={(e) => this.props.changeTextTitle(e.target.value)}
                                        placeholder="Add Company Name"
                                        value={this.props.homeStoreDesign.titleText.onThePicture}
                                        className={classes.fieldTextStyle} />
                                    <br></br>
                                    <br></br>
                                    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                                    <FormLabel className={classes.textcontect}>Border Radius Frame</FormLabel>
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
                                                defaultValue={this.props.homeStoreDesign.BorderRadius.pictureFrame}
                                                step={1}
                                                marks
                                                min={0}
                                                max={100}
                                                getAriaValueText={this.props.changeBorderRadius}
                                                valueLabelDisplay="auto"
                                                className={classes.MuiSlider_root}
                                            />
                                        </Box>
                                        <Box justifyContent="flex-end">
                                            <input
                                                textAlign="center"
                                                id="standard-number"
                                                type="number"
                                                value={this.props.homeStoreDesign.BorderRadius.pictureFrame ? this.props.homeStoreDesign.BorderRadius.pictureFrame : '64'}
                                                defaultValue={this.props.homeStoreDesign.BorderRadius.pictureFrame}
                                                onChange={(e) => this.props.changeBorderRadius(e.target.value)}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                className={classes.inputNumberSlider}
                                            />
                                        </Box>
                                    </Box>
                                    {/* //////////////////////////////////////////////////////////////////////////////// */}
                                    <br></br>
                                    <br></br>
                                    <Box flexDirection="row"
                                        display="flex"
                                        justifyContent="space-between"
                                    >
                                        <Box
                                            width={'80%'}
                                        >
                                            <FormLabel className={classes.textcontect}>font</FormLabel>
                                        </Box>
                                        <Box justifyContent="flex-end">
                                        </Box>
                                    </Box>
                                    <input type="text"
                                        width={2}
                                        InputProps={{ className: classes.multilineColor }}
                                        onChange={(e) => this.props.changeFont(e.target.value)}
                                        placeholder="To"
                                        value={this.props.homeStoreDesign.titleFont.onThePicture}
                                        className={classes.fieldTextStyle} />
                                    <br></br>
                                    <br></br>
                                    <Box flexDirection="row"
                                        display="flex"
                                        justifyContent="space-between"
                                    >
                                        <Box
                                            width={'80%'}
                                        >
                                            <FormLabel className={classes.textcontect}>Text weight</FormLabel>

                                        </Box>
                                        <Box justifyContent="flex-end">

                                        </Box>

                                    </Box>



                                    <input type="text"
                                        width={2}
                                        InputProps={{ className: classes.multilineColor }}
                                        onChange={(e) => this.props.changeTextWeight(e.target.value)}
                                        placeholder="Add Company Name"
                                        value={this.props.homeStoreDesign.titleTextWeight.onThePicture}
                                        className={classes.fieldTextStyle} />
                                    <br></br>
                                    <br></br>

                                    <FormLabel className={classes.textcontect}>Text size</FormLabel>

                                    <Box flexDirection="row"
                                        display="flex"
                                        justifyContent="space-between"
                                    >

                                        <Box
                                            width={'100%'}
                                            alignSelf="center"
                                        >
                                            <Slider
                                                defaultValue={this.props.homeStoreDesign.titleTextSize.onThePicture}
                                                step={1}
                                                marks
                                                min={0}
                                                max={200}
                                                getAriaValueText={this.props.changeTextSize}
                                                valueLabelDisplay="auto"
                                                className={classes.MuiSlider_root}
                                            />
                                        </Box>
                                        <Box justifyContent="flex-end">
                                            <input
                                                textAlign="center"
                                                id="standard-number"
                                                type="number"
                                                value={this.props.homeStoreDesign.titleTextSize.onThePicture}
                                                defaultValue={this.props.homeStoreDesign.titleTextSize.onThePicture}
                                                onChange={this.changeTextSizein}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                className={classes.inputNumberSlider}
                                            />
                                        </Box>
                                    </Box>

                                    <div className="d-flex justify-content-center align-items-center">
                                        <FormLabel className={classes.textcontect}>Alignment</FormLabel>
                                        <i className="fas fa-align-left iconAlign iconAlignFirst fa-lg" onClick={(e) => this.props.changeTitleAlignment('left')}></i>
                                        <i class="fas fa-align-left"></i>
                                        <i className="fas fa-align-center ml-2 iconAlign fa-lg" onClick={(e) => this.props.changeTitleAlignment('center')}></i>
                                        <i className="fas fa-align-right ml-2 iconAlign fa-lg" onClick={(e) => this.props.changeTitleAlignment('right')}></i>
                                    </div>
                                    <br></br>
                                    <br></br>

                                    <FormLabel className={classes.textcontect}>Line Height</FormLabel>


                                    <Box flexDirection="row"
                                        display="flex"
                                        justifyContent="space-between"
                                    >

                                        <Box
                                            width={'100%'}
                                            alignSelf="center"
                                        >


                                            <Slider {...defaultProps3}
                                                defaultValue={this.props.homeStoreDesign.titleLineHeight.onThePicture ? this.props.homeStoreDesign.titleLineHeight.onThePicture : '1.2'}
                                                step={0.1}
                                                marks
                                                min={0.7}
                                                max={2.8}
                                                getAriaValueText={this.props.changeTitleLineHeight}
                                                valueLabelDisplay="auto"
                                                className={classes.MuiSlider_root}



                                            />

                                        </Box>
                                        <Box justifyContent="flex-end">
                                            <input
                                                textAlign="center"
                                                id="standard-number"
                                                type="number"
                                                disabled="disabled"
                                                value={this.props.homeStoreDesign.titleLineHeight.onThePicture ? this.props.homeStoreDesign.titleLineHeight.onThePicture : '10'}
                                                // defaultValue={this.props.videoDetails.logo.widthLogo}
                                                onChange={(e) => this.props.changeTitleLineHeight(e.target.value)}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                className={classes.inputNumberSlider}
                                            />

                                        </Box>

                                    </Box>


                                    <FormLabel className={classes.textcontect}>Color text</FormLabel>

                                    <Box flexDirection="row"
                                        display="flex"
                                        justifyContent="space-between"
                                    >

                                        <Box
                                            width={'100%'}
                                            alignSelf="center"
                                        >
                                            <HuePicker
                                                color={this.props.homeStoreDesign.titleColorText.onThePicture}
                                                onChangeComplete={this.changeTitleColorText}
                                                width={200}
                                                height={6}
                                            />


                                        </Box>
                                        <Box justifyContent="flex-end">
                                            <input
                                                textAlign="center"
                                                id="standard-number"
                                                type="number"
                                                value={this.props.homeStoreDesign.titleColorText.onThePicture}
                                                defaultValue={this.props.homeStoreDesign.titleColorText.onThePicture}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                className={classes.inputNumberSlider}
                                            />
                                        </Box>
                                    </Box>
                                </Grid>
                            </div>
                        </FormGroup>
                    </FormControl>

                </div></>


        )
    }


}

const mapStateToProps = (state) => {
    return {
        homeStoreDesign: state.editHomeStoreReducer.homeStoreDesign
    };
}

const mapDispatchToProps = (dispatch) => ({
    changeTextTitle: (e) => dispatch(actions.setTitleText({ k: "onThePicture", e })),
    changeFont: (e) => dispatch(actions.setTitleFont({ k: "onThePicture", e })),
    changeTextWeight: (e) => dispatch(actions.setTitleTextWeight({ k: "onThePicture", e })),
    changeTextSize: (e) => dispatch(actions.setTitleTextSize({ k: "onThePicture", e })),
    changeTitleAlignment: (e) => dispatch(actions.setTitleAlignment({ k: "onThePicture", e })),
    changeTitleLineHeight: (e) => dispatch(actions.setTitleLineHeight({ k: "onThePicture", e })),
    changeTitleColorText: (e) => dispatch(actions.setTitleColorText({ k: "onThePicture", e })),
    changeTitleYOrN: (e) => dispatch(actions.setTitleYOrN(e)),
    changeBorderRadius: (frame) => dispatch(actions.setBorderRadius({ key: "pictureFrame", frame }))
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(TextOnThePicture));
