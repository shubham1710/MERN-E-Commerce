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
        const userId = req.params.id;
        const address = req.body.address;
        let cart = await Cart.findOne({userId});

        // no payments for now. Will add later!
        // for now just move cart to order!
        if(cart){
            const order = await Order.create({
                userId,
                items: cart.items,
                address: address,
                bill: cart.bill
            });
            const data = await Cart.findByIdAndDelete({_id:cart.id});
            return res.status(201).send(order);
        }
        else{
            res.status(500).send("You do not have items in cart");
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}