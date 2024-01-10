import Config from "react-native-config";

export const StripeAPI = {
  fetchPaymentSheetParams: async (amount: number, email: string) => {
    const response = await fetch(
      `${Config.STRIPE_API_BASE_URL!}/payments/create-payment-intent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          email,
        }),
      }
    );

    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    };
  },
};
