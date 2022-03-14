# Shoppio

Practice e-commerce

**Author**: Tomás Szwarcberg

## About

User is able to:

- Search for items filtering by category
- Add products to cart, as much as the remaining stock for every specific item
- Visualize how many items the cart has, and total price
- Order the products, providing contact information.

Every order must update the available stock on ordered products.
Orders are posted on Firestore a collection
Products data such as name, remaining stock, price are fetched from Firebase.

---

## Demo

![Shoppio Demo](https://github.com/szwtomas/shoppio/blob/master/demo.gif)

---

## Implementation

This application uses ReactJS with create-react-app for the front-end, and Firebase as back-end service, particullary Firestore database.

### Routing

React Router v6 is the choice for routing. This routes render the following components:

- **"/"** renders ItemListContainer, which shows all the products avaliable.
- **"/category/:category"** also renders ItemListContainer, but now filtering by _category_ parameter, displating only products whose categories match.
- **"/detail/:productId"** renders ItemDetailContainer. This component is in charge of fetching information such as title, price, image, and so on for displaying details of product with id matching the parameter _productId_
- **"/cart"** renders Cart component, showing all the added products, amount and prices to the cart with its total price. It also links to checkout allowing user to proceed to checkout.
- **"/checkout"** renders Checkout component, displaying the form where user provides contact information and confirms the order.
- **"/ordercompleted"** renders OrderCompleted component, simply leting the user know that the order was posted succesfully and linking to _"/"_

### State Managment

State managment is implemented with react built-in Context. CartContext provides all the items added to the cart, as well as functions such as addToCart, clearCart, itemInCart, etc.

### API

All backend interaction is implemented in _index.js_ file in _service/firestore_ directory, in order to keep all the firebase imports separeted from the ui.
This module is the interface for using and fetching all firebase/firestore data.

### Miscellaneous

FontAwesome V5 is the choice for icons, but using the CDN instead of installing react-icons dependency.

---

## Setup

To install dependiencies with npm, just execute `npm install` command in the root directory.
In order for the Firebase connection to work, environment variables must be set in the .env files. The names of these variables can be found on _src/service/firestore/firebase.js_.
Send an email to tszwarcberg@fi.uba.ar in order to get the actual values.

---

## Run Application

Once dependencies are installed, execute `npm start` to run a local server in `localhost:3000`

---

## Contact

You can contact me sending an eamil to tszwarcberg@fi.uba.ar to contribute.
