
var React = require( 'react' ),
    Donut = require( 'diffract' ).Donut,
    MultiColumnGraph = require( 'diffract' ).MultiColumnGraph,
    BarGraph = require( 'diffract' ).BarGraph,
    colors = [ '#E91E63', '#2196F3', '#FF9800', '#4CAF50', '#673AB7' ],
    width = 320, height = 240,
    cnt = 1,
    App;

App = React.createClass({

    getInitialState: function() {
        return {
            values: [ Math.random() * 10000, Math.random() * 10000,
                Math.random() * 10000, Math.random() * 10000,
                Math.random() * 10000 ],

            labels: ['Elves', 'Dwarves', 'Hobbits', 'Men', 'Wizards']
        };
    },
    getColors: function ( d, i ) {
        if ( arguments.length == 2 ) {
            return colors[ i ];
        } else {
            return colors[ d ];
        }

    },

    getDonut: function () {

        return (
            <Donut values={this.state.values} title="Hello" subtitle="using react"
                segmentColor={this.getColors} width={width} height={height}>
            </Donut>
        );
    },

    getMultiColumnGraph: function () {
        var columnData = [ [ Math.random() * 10000, Math.random() * 10000,
            Math.random() * 10000, Math.random() * 10000,
            Math.random() * 10000 ],
            [ Math.random() * 10000, Math.random() * 10000,
            Math.random() * 10000, Math.random() * 10000,
            Math.random() * 10000 ],
            [ Math.random() * 10000, Math.random() * 10000,
            Math.random() * 10000, Math.random() * 10000,
            Math.random() * 10000 ],
            [ Math.random() * 10000, Math.random() * 10000,
            Math.random() * 10000, Math.random() * 10000,
            Math.random() * 10000 ],
            [ Math.random() * 10000, Math.random() * 10000,
            Math.random() * 10000, Math.random() * 10000,
            Math.random() * 10000 ] ],

            xFormat = function ( n ) {
                return n;
            },

            yFormat = function ( n ) {
                return n;
            };


        return (
            <MultiColumnGraph data={columnData} colorGenerator={this.getColors}
                xAxisTickFormatter={xFormat} yAxisTickFormatter={yFormat}>
            </MultiColumnGraph>
        );
    },

    updateData: function() {
        if (cnt++ % 3) {
            this.setState({values: [ Math.random() * 10000, Math.random() * 10000,
                Math.random() * 10000, Math.random() * 10000,
                Math.random() * 10000 ],

                labels: ['Elves', 'Dwarves', 'Hobbits', 'Men', 'Wizards']});
        } else {
            this.setState({values: [ Math.random() * 10000, Math.random() * 10000,
                Math.random() * 10000, Math.random() * 10000 ],

                labels: ['Elves', 'Dwarves', 'Hobbits', 'Men']});
        }
    },

    componentDidMount: function() {
        this._updater = setInterval(this.updateData.bind(this), 2000);
    },

    componentDidUnmount: function() {
        clearInterval(this._updater);
    },

    getBarGraph: function() {

        var xFormat = function ( n ) {
                return n;
            },

            yFormat = function ( n ) {
                return n;
            };

        return (
            <BarGraph values={this.state.values} barColor={this.getColors}
                labels={this.state.labels} leftMargin={40}
                width={width} height={height}>
            </BarGraph>
        );
    },


    render: function () {
        var donut = this.getDonut(),
            barGraph = this.getBarGraph(),
            padding = {padding: '50px'};

        return (
            <div style={padding}>
                <div width="640" height="480">
                    <h2>Donut</h2>
                    {donut}
                </div>
                <div>
                    <h2>Bar Graph</h2>
                    {barGraph}
                </div>
            </div>
        );
    }
});


React.render(
    <App/>,
    document.getElementById( 'appRoot' )
);
