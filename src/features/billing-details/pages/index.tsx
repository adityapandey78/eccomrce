import BillingForm from "../components/billing-form";
import { Route } from "react-router-dom";

export const BillingRoutes = () => (
	<>
		<Route path="billingPage" element={<BillingForm />} />
	</>
);
