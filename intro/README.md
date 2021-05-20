## First React App

This follows the React web developement from Ivan on Tech. (May 18, 2021)

After playing a little with *.html & .css files for basic webpages looks now we will bild a react app. The app is a coin exchange. 

The motivation of taking this course is to be able to build and understand basic web development. 

## 1.1 React app vs browser CDMs

Content Delivery Network (CDM) links inside our `R02_constructorFunctions.html`

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Hello World</title>
        <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

        <!-- Don't use this in production: -->
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      </head>
      <body>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody id="root"></tbody>
        </table>
        <script type="text/babel"
        
here by CDDs we are refferring to the `<script> src="https://..."`. These urls are invoked when deploying the code and are hosted on the internet, imposing that we trust those links. For this reasons we can not build a real-app for production. Therefore we will build an app using **Create-React**

## 1.2 VS-Code Extensions

To make our coding easier we install handy extensions

. ES7 React/Redux/GraphQL/React-Native snippets
. JavaScript (ES6) code snippets

## 1.3 Create React app, first steps

We proceed by creating aour own React app, lets call it: `coin-exchange`

    npx create-react-app coin-exchange
    
In contrast to installing an `npm` package we are using `npx`, which runs packages without installing them. Remember that React was developed by Facebook, check their [React-github](https://github.com/facebook/react)

#### 1.3.1 Functionalitiy

It is good practice to add **styling** and  **functionalities**. So we will create the components code in a different folder. Here we create a `Coin.jsx` inside newly-created folders: `./src/components/Coin/Coin.jsx` (all these are inside the project folder `coin-exchange`)

#### 1.3.2 Styling

Whereas with respect to the styling it is better practice to work it out in a `*.css` file. Therefore we proceed to create it in `./src/components/Coin/Coin.css`. 

Some good open-source resources for learning styling syntax is [CSS Cheatsheet](https://htmlcheatsheet.com/css/) and also [material-UI](https://material-ui.com/).

There is also games to learn and practice styling with [Flexbox Zombies](https://mastery.games/flexboxzombies/) or [CSS Diner](https://flukeout.github.io/)

#### 1.3.3 PropTypes instead of Typescript

we can basically grab and paste css styling in our app.f we look at he price column in our `App.js`, we note that 

    <tbody>
      <Coin name="Cardano" ticker="ADA" price={1000.00} />
      <Coin name="Bitcoin" ticker="BTC" price={300000.50} />
    </tbody>

`<price={xxx}>` displays a string rather than a float number. If we would use the programming language **Typescript** instead of **JavaScript** we could correct this from the very beggining of the definition. However, for simplicity React comes with a solution [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html). 

To use PropTypes we first have to import them inside our `./src/components/Coin/Coin.jsx` and then create the `Coin.ProtoType`:

    import ProptTypes from 'prop-types';
   .
   .
   .
    Coin.PropTypes = {
        name: PropTypes.string.isRequired,
        ticker: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }
    
Furthermore, we have imposed that the type of the first two columns has to be string and the price has to be a number.
    
#### 1.3.4 Random state

Now we will add dynamical changes to the price. Just to get started, random numbers. Later we will retrieve the true price with an API.

So we have to define the capability to change the state of the price by i) defining a constructor, ii) setting the state to a random value and iii) updating the state calling the constructor

    export default class Coin extends Component {
        constructor(props){ // i) constructor to grab & prop the state
            super(props);
            this.state = {
                price: this.props.price
            }
        }
        componentDidMount() {
            const callback = () => {
                // ii) set the state to a new random value
                const randomPercentage = 0.995 + Math.random() *0.01;
            
                this.setState(function(oldState) {
                    // iii) updates the state calling the constructor
                    return {
                        price: oldState.price * randomPercentage
                    };
                });
            }
            setInterval(callback, 2000); // this is 2000 ms = 2 sec
        }

        render() {
            return (
                <tr className="coin-row">
                  <td>{this.props.name}</td>
                  <td>{this.props.ticker}</td>
                  <td>${this.state.price}</td>  
                </tr>
            );
        }
    }
    
#### 1.3.5 Events


