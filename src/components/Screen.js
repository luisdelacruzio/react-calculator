import React from "react";

/**
 * Generates the display for the calculator
 *
 * @param props The results to display on the screen
 * @returns {*}
 * @constructor
 */
function Screen(props) {
    return <div className="screen">
        <input type="text" value={props.result} disabled/>
    </div>;
}

export default Screen;