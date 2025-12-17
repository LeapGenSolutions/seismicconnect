import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import DemoPage from "./pages/DemoPage";
import LoginSignup from "./pages/LoginSignup";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./index.css";
import ThankYouPage from "./pages/ThankYouPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<Routes>
				{/* Landing Page */}
				<Route path="/" element={<App />} />
				{/* About Page */}
				<Route path="/about" element={<About />} />
				{/* Standalone Pages */}
				<Route path="/auth" element={<LoginSignup />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/demo" element={<DemoPage />} />
				<Route path="/thank-you" element={<ThankYouPage />} />
				{/* Legal & Connect */}
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />	
				<Route path="/terms-and-conditions" element={<TermsAndConditions />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
