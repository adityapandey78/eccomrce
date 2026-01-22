import { yupResolver } from "@hookform/resolvers/yup";
import {
	Box,
	Checkbox,
	Flex,
	FormInput,
	FormLabel,
	Heading,
	Image,
	Radio,
	RadioGroup,
	Text,
	toast,
} from "@sparrowengg/twigs-react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as yup from "yup";
import ButtonPrimary from "../../../commons/components/button-primary";
import HorizontalLine from "../../../commons/components/horizontal-line";
import type { RootState } from "../../../commons/store/store";
import BANKS from "../data/BANKS";
import type billingFormProps from "../types";
import type { bankEnum, checkoutPayload } from "../types";

const BillingPage = () => {
	const cartItems = useSelector((state: RootState) => state.cart.products);

	const subtotal = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	const billingSchema = yup.object({
		firstName: yup.string().required("Name is required"),
		email: yup
			.string()
			.email("Please enter valid email")
			.required("Email is required"),

		companyName: yup.string().optional(),
		streetAddress: yup.string().required("Street Address is required"),
		apartment: yup.string().optional(),
		town: yup.string().required("Please enter Town/City"),

		phone: yup
			.string()
			.required("Phone is required")
			.min(10, "Please enter valid phone number"),

		payment: yup
			.object({
				type: yup.mixed<"cod" | "bank">().oneOf(["cod", "bank"]).required(),
				provider: yup.mixed<bankEnum>().optional(),
			})
			.required(),

		saveInfo: yup.boolean().optional(),
	});

	const {
		register,
		handleSubmit,
		watch,
		control,
		formState: { errors },
		setError,
	} = useForm<billingFormProps>({
		resolver: yupResolver(billingSchema),
		defaultValues: {
			payment: { type: "cod" },
		},
	});
	const paymentType = watch("payment.type");

	const onSubmit: SubmitHandler<billingFormProps> = (data) => {
		if (cartItems.length === 0) {
			setError("root", {
				type: "manual",
				message: "Your cart is empty. Please add items before checkout.",
			});
			toast({
				variant: "error",
				title: "Your cart is empty.",
				description: "Please add items to the cart before checkout",
			});
			return;
		}
		const payload: checkoutPayload = {
			customer: data,
			items: cartItems,
			totals: { subtotal },
			createdAt: new Date().toISOString(),
		};
		console.log("You cart data is:",payload);
		// alert('The order is submitted!');

		toast({
			variant: "default",
			title: "Cart Submitted",
			description:
				"The order has been placed. Please check console for results",
		});
	};

	return (
		<Flex
			css={{
				minHeight: "100vh",
				width: "100vw",
				padding: "50px 135px",
				flexDirection: "column",
				gap: "40px",
			}}
		>
			<Heading
				size="h1"
				css={{
					fontSize: "36px",
					lineHeight: "30px",
					letterSpacing: "1px",
					fontWeight: "$5",
				}}
			>
				Billing Details
			</Heading>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Flex
					css={{
						width: "100%",
						justifyContent: "space-between",
						alignItems: "flex-start",
						gap: "80px",
					}}
				>
					{/* Left: Form */}
					<Box css={{ width: "500px" }}>
						<Flex flexDirection="column" gap="$10">
							<Box>
								<FormLabel requiredIndicator htmlFor="firstName">
									First Name
								</FormLabel>
								<FormInput
									id="firstName"
									{...register("firstName")}
									error={errors.firstName?.message}
								/>
							</Box>

							<Box>
								<FormLabel htmlFor="companyName">Company Name</FormLabel>
								<FormInput
									id="companyName"
									{...register("companyName")}
									error={errors.companyName?.message}
								/>
							</Box>

							<Box>
								<FormLabel requiredIndicator htmlFor="addressLine1">
									Street Address
								</FormLabel>
								<FormInput
									id="addressLine1"
									{...register("streetAddress")}
									error={errors.streetAddress?.message}
								/>
							</Box>

							<Box>
								<FormLabel htmlFor="addressLine2">
									Apartment, floor, etc. (optional)
								</FormLabel>
								<FormInput
									id="addressLine2"
									{...register("apartment")}
									error={errors.apartment?.message}
								/>
							</Box>

							<Box>
								<FormLabel requiredIndicator htmlFor="town">
									Town/City
								</FormLabel>
								<FormInput
									id="town"
									{...register("town")}
									error={errors.town?.message}
								/>
							</Box>

							<Box>
								<FormLabel requiredIndicator htmlFor="phoneNumber">
									Phone Number
								</FormLabel>
								<FormInput
									id="phoneNumber"
									{...register("phone")}
									error={errors.phone?.message}
								/>
							</Box>

							<Box>
								<FormLabel requiredIndicator htmlFor="email">
									Email Address
								</FormLabel>
								<FormInput
									id="email"
									{...register("email")}
									error={errors.email?.message}
								/>
							</Box>
							<Controller
								name="saveInfo"
								control={control}
								defaultValue={false}
								render={({ field }) => (
									<Checkbox
										id="save-info"
										size="sm"
										checked={field.value}
										onChange={(val) => field.onChange(val)}
										// onError={errors.firstName?.message}
									>
										Save this information for faster check-out next time
									</Checkbox>
								)}
							/>
						</Flex>
					</Box>

					{/* Right: Order Summary */}
					<Box css={{ width: "600px" }}>
						<Flex flexDirection="column" gap="$12">
							{cartItems.map((item) => (
								<Flex
									key={item.id}
									alignItems="center"
									justifyContent="space-between"
								>
									<Flex alignItems="center" gap="$10">
										<Image
											src={item.image}
											alt={item.title}
											css={{ width: "48px", height: "48px" }}
										/>
										<Text>{item.title}</Text>
									</Flex>
									<Text>${item.price}</Text>
								</Flex>
							))}

							<Flex justifyContent="space-between" css={{ marginTop: "16px" }}>
								<Text>Subtotal:</Text>
								<Text>${subtotal}</Text>
							</Flex>
							<HorizontalLine css={{ width: "100%" }} />
							<Flex justifyContent="space-between">
								<Text>Shipping:</Text>
								<Text>Free</Text>
							</Flex>
							<HorizontalLine css={{ width: "100%" }} />
							<Flex
								justifyContent="space-between"
								css={{ marginBottom: "24px" }}
							>
								<Text css={{ fontWeight: "$6" }}>Total:</Text>
								<Text css={{ fontWeight: "$6" }}>${subtotal}</Text>
							</Flex>

							{/* Payment Type */}
							<Controller
								name="payment.type"
								control={control}
								defaultValue="cod"
								render={({ field }) => (
									<RadioGroup
										value={field.value}
										onChange={(val) => field.onChange(val)}
									>
										<Flex alignItems="center" justifyContent="space-between">
											<Radio value="bank">Bank</Radio>

											{/* Bank Provider Icons */}
											<Controller
												name="payment.provider"
												control={control}
												render={({ field: provider }) => (
													<Flex
														gap="$8"
														css={{ opacity: paymentType === "bank" ? 1 : 0.7 }}
													>
														{BANKS.map((b) => (
															<Image
																key={b.key}
																src={b.src}
																alt={b.alt}
																css={{
																	height: "28px",
																	width: "42px",
																	objectFit: "contain",
																	cursor:
																		paymentType === "bank"
																			? "pointer"
																			: "not-allowed",
																	border:
																		provider.value === b.key
																			? "2px solid #000"
																			: "2px solid transparent",
																	borderRadius: "6px",
																	padding: "2px",
																}}
																onClick={() => {
																	if (paymentType === "bank") {
																		provider.onChange(b.key);
																	}
																}}
															/>
														))}
													</Flex>
												)}
											/>
										</Flex>

										<Radio value="cod">Cash on Delivery</Radio>
									</RadioGroup>
								)}
							/>

							<Flex gap="$12" css={{ height: "56px" }}>
								<FormInput placeholder="Coupon Code" css={{ height: "100%" }} />
								<ButtonPrimary>Apply Coupon</ButtonPrimary>
							</Flex>

							<ButtonPrimary
								type="submit"
								css={{ marginTop: "12px", width: "200px" }}
							>
								Place Order
							</ButtonPrimary>
						</Flex>
					</Box>
				</Flex>
			</form>
		</Flex>
	);
};

export default BillingPage;
