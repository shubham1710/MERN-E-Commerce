const Order = require('../models/order');
const config = require('config');
const Stripe = require('stripe');
const stripe = Stripe(config.get('StripeAPIKey'));
const Cart = require('../models/Cart');

module.exports.get_orders = async (req,res) => {
    const userId = req.params.id;
    try{
        let order = await Order.findOne({userId});
        if(order){
            res.send(order);
        }
        else{
            res.send("You have not made any orders yet!");
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}

module.exports.checkout = async (req,res) => {
    try{
        const userId = req.body.userId;
        const address = req.body.address;
        let cart = await Cart.findOne({userId});
        const bill = cart.bill;
        
        const paymentIntent = await stripe.paymentIntents.create({
            amount: bill,
            currency: "inr",
        });

        if (paymentIntent.status === "succeeded") {
            const newOrder = await Order.create({
                userId,
                items: cart.items,
                address: address,
                bill: bill
            });
            const cart = await Cart.findByIdAndDelete({_id: cart._id});
            return res.send(newOrder);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}