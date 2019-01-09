import React, {Component} from 'react';
import {CssBaseline, withStyles} from '@material-ui/core';
import MyInfo from "./MyInfo";
import NameCard from "./NameCard";
import Education from "./Education";

const styles = {
    root: {
        padding: 50
    },
    infoBox: {
        marginBottom: '16px'
    }
};

class App extends Component {
    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={`container ${classes.root}`}>
                    <div className={'row'}>
                        <div className={`col-12 col-lg-3 ${classes.infoBox}`}>
                            <MyInfo/>
                        </div>
                        <div className={'col-12 col-lg-9'}>
                            <NameCard/>
                            <Education />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles) (App);