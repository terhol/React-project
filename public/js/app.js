class ProductList extends React.Component {
    render() {
        return (
            <div className='ui unstackable items'>
                Hello! I am a basic React Component. What I learned by this? Well, that react Components always start
                with an upper case :-)
            </div>
        );
    }
}

ReactDOM.render(<ProductList/>, document.getElementById('content'));
