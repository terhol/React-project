class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: [],};
    }

    componentDidMount() {
        this.setState({products: Seed.products})
    }

    handleProductUpVote(productId) {
        console.log(`${productId} was up voted`);
    }


    render() {
        const products = this.state.products.sort((a, b) =>
            (b.votes - a.votes));
        const productComponents = products.map((product) => {
            const {id, title, description, url, votes, submitterAvatarUrl, productImageUrl} = product;
            return (
                <Product
                    id={id}
                    title={title}
                    description={description}
                    url={url}
                    votes={votes}
                    submitterAvatarUrl={submitterAvatarUrl}
                    productImageUrl={productImageUrl}
                    onVote={this.handleProductUpVote}
                />
            )
        });
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }
}

class Product extends React.Component {
    handleUpVote = () => {
        this.props.onVote(this.props.id);
    }

    render() {
        const {productImageUrl, votes, url, title, description, submitterAvatarUrl} = this.props;
        return (
            <div className='item'>
                <div className='image'>
                    <img src={productImageUrl} alt='Product image'/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon'/>
                        </a>
                        {votes}
                    </div>
                    <div className='description'>
                        <a href={url}>
                            {title}
                        </a>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img className='ui avatar image'
                             src={submitterAvatarUrl} alt='User Avatar'/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ProductList/>, document.getElementById('content'))
