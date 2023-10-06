import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  /* Every time that there is an error, it is going to call this function.
       This is like: if you encounter an error, this is what I want you to set
       the new state to be 
    */
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  /* This is a life cycle method. The varibale "error" is the actual error that 
  is caught
   */
  componentDidCatch(error, info) {
    // typically you would log this to something like TrackJS or NewRelic
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click here to go the home page.</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
