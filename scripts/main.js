var React = require('react');
var ReactDOM = require('react-dom');
 
/*
    App
*/

var App = React.createClass({

    render: function() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh SeaFood Market"/>
                </div>
                <Order />
                <Inventory />
            </div>
        )
    }
 });

/*
 header
*/
var Header = React.createClass({

    render: function() {
        return (
            <header className="top">
                <h1>Catch
                <span className="ofThe">
                <span className="of">of</span>
                <span className="the">the</span>
                </span>
                day</h1>
                <h3 className="tagline"><span>{this.props.tagline}</span></h3>
            </header>
        )
    }
})

/*
 order
*/
var Order = React.createClass({

    render: function() {
        return (
            <p>Order</p>
        )
    }
})

/*
 inventory
*/
var Inventory = React.createClass({

    render: function() {
        return (
            <p>Inventory</p>
        )
    }
})

/* 
    store picker component
    This will let us make store picker
*/

var StorePicker = React.createClass({

    render: function() {
        var name = "hum";
        return(
            <form className="store-selector">
                <h2>Please enter a store {name}</h2>
                <input type="text" ref="storeID" required/>
                <input type="Submit" />
            </form>
        )
    }
});

ReactDOM.render(<App/>, document.querySelector('#main'));