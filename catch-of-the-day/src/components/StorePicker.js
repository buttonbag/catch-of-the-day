import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();
    goToStore = (event) => {
        // 1. stop the form from submitting
        event.preventDefault();
        // 2. get the text from that input
        const storeName = this.myInput.current.value;
        // 3. Change the apge to that store
        this.props.history.push(`/store/${storeName}`);
    }
    render(){
        return(
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store.</h2>
                <input type="text" ref={this.myInput} className="class" required placeholder="Enter Store Name" defaultValue={getFunName()} />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;