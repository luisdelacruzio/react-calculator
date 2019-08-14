import React from "react";

/**
 * Creates the buttons to display on the calculator
 *
 * @returns {*} The buttons
 *
 */
function KeyPad(props) {

    return <table className="keyPad" onClick={props.onclick}>
        <tr>
            <td>
                <button type="button">(</button></td>
            <td>
                <button type="button">)</button></td>
            <td>
                <button type="button">%</button></td>
            <td>
                <button type="button">AC</button></td>
        </tr>
        <tr>
            <td>
                <button type="button">7</button></td>
            <td>
                <button type="button">8</button></td>
            <td>
                <button type="button">9</button></td>
            <td>
                <button type="button">&divide;</button></td>
        </tr>
        <tr>
            <td>
                <button type="button">4</button></td>
            <td>
                <button type="button">5</button></td>
            <td>
                <button type="button">6</button></td>
            <td>
                <button type="button">&times;</button></td>
        </tr>
        <tr>
            <td>
                <button type="button">1</button></td>
            <td>
                <button type="button">2</button></td>
            <td>
                <button type="button">3</button></td>
            <td>
                <button type="button">-</button></td>
        </tr>
        <tr>
            <td>
                <button type="button">0</button></td>
            <td>
                <button type="button">.</button></td>
            <td>
                <button type="button">=</button></td>
            <td>
                <button type="button">+</button></td>
        </tr>
    </table>
}

export default KeyPad;