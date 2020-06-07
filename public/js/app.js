class ProductList extends React.Component {
    handleProductUpVote(productId){
        console.log(productId + 'was upvoted.');
    }
    render() {
        const products = Seed.products.sort((a, b) =>
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
    constructor(props) {
        super(props);
        this.handleUpVote= this.handleUpVote.bind(this);
    }
    handleUpVote(){
        this.props.onVote(this.props.id);
    }
    render() {
        const {productImageUrl, votes, url, title, description, submitterAvatarUrl, handleUpVote} = this.props;

        return (
            <div className='item'>
                <div className='image'>
                    <img src={productImageUrl} alt='Product image'/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={handleUpVote}>
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
