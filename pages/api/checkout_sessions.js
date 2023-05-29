const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    const { name, link, price, quantity, service } = req.body;
    const items = req.body;
    const transformedItem = {
        price_data: {
            currency: 'usd',
            product_data: {
                name: name + service ,
            },
            unit_amount: parseInt(price * 100),
        },
        quantity: parseInt(1),
    };
    const encodedData = encodeURIComponent(JSON.stringify(items));
    if (req.method === 'POST') {
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: [transformedItem],
                mode: 'payment',
                success_url: `${req.headers.origin}/success?data=${encodedData}`,
                cancel_url: `${req.headers.origin}/order`,
            });

            // Send the response
            res.status(200).json({ sessionURL: session.url });
            if (res.statusCode == 200 ){
                
            }
        } catch (err) {
            console.log(err);
            res.status(err.statusCode || 500).json({ error: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }

}
