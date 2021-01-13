import './App.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";

const promise = loadStripe("pk_test_51I8nNlE1GFOYISs12qNjjeukzwsnS2ONltiW6fq3tdKJDURT4EShHD2Pvs1c5GnlIVaebmoXJZXPuKHVQzl4fMmx00bcRX9d6t")

function App() {
  return (
    <div className="App">
      <h1>E Commerce MERN App</h1>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default App;
