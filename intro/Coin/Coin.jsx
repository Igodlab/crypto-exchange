import React, {Component} from 'react';
import './Coin.css';

export default class Coint extends Component {
    render() {
        return (
            <tr class="coin-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>{this.props.price}</td>
            </tr>
        );
    }
}
