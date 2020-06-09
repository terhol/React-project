const ProductList = () => {
    const handleProductUpVote = (productId) => {
        console.log(`${productId} was up voted`);
    }

    const products = Seed.products.sort((a, b) => (b.votes - a.votes));

    return (
        <div className='ui unstackable items'>
            {products.map((product) => (
                <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                    onVote={handleProductUpVote}
                />
            ))}
        </div>
    );
}

const Product = ({productImageUrl, votes, url, title, description, submitterAvatarUrl, id, onVote}) => {
    const handleUpVote = () => {
        onVote(id);
    }

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

ReactDOM.render(<ProductList/>, document.getElementById('content'))