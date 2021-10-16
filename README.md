# Mern E-Commerce
An e-commerce app built on MERN stack (MongoDB, Express, React and Node) with Stripe Checkout to handle payments.
Features present in the app :-
1. Authentication using JSON Web Tokens (JWT).
2. Option to add, edit, view and delete all the items in our store.
3. Option to add items or remove items from the cart for the user.
4. Display the total bill of the cart and update it as soon as the cart is updated by the user.
5. Using Local Storage to store the JWT so that we only allow logged-in users to buy items.
6. Option to pay using Stripe Checkout and thus creating a new order and emptying the cart after payment is successful.
7. Option to view all your past orders along with the bill amount for each.
---
# Install

**Backend**

1.  **Configure default configs**. In `config/default.json`, set your variables.

	1. `dbUrl`: It can be set as `mongodb://localhost/MernECommerce`.
NOTE: This is very basic, one without any username and password. This can be configured as per your requirement.
  2. `jwtsecret`: This is the key used sign jwt tokens. It can be set as `dummySecret`.
  3. `StripeAPIKey`: Create your account here [register](https://dashboard.stripe.com/register).
2. Install dependencies with `npm i`.
3. Server will start running on [port 4000](http://localhost:4000).