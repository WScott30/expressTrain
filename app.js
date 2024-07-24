const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const store = [
    {
        name: 'apple',
        price: 1.5
    }
];
app.get('/', (req, res) => {
    res.json(store);
});
app.get('/get-all-products', (req, res) => {
    const productNames = store.map(product => product.name);
    res.json(productNames);
});
app.get('/get-product/:productName', (req, res) => {
    const productName = req.params.productName;
    const product = store.find(p => p.name === productName);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});
app.post('/create-product', (req, res) => {
    const { name, price } = req.body;
    const productExists = store.some(product => product.name === name);

    if (productExists) {
        res.status(400).json({ error: 'Product already exists' });
    } else {
        store.push({ name, price });
        res.json({ message: 'Product added' });
    }
});
app.delete('/delete-product/:productName', (req, res) => {
    const productName = req.params.productName;
    const productIndex = store.findIndex(p => p.name === productName);

    if (productIndex !== -1) {
        store.splice(productIndex, 1);
        res.json({ message: 'Product deleted' });
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});
 