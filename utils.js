export default async function getTrendingCoins() {
  const options = {
    method: "GET",
    headers: { "x-cg-demo-api-key": "CG-PK42TrTwugtKpceqMPw5113G" },
  };

  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending",
      options
    );
    const resData = await response.json();
    return { trendingCoins: resData.coins || [] }; // Ensure trendingCoins is an array
  } catch (err) {
    console.error(err);
    return { trendingCoins: [] }; // Return an empty array in case of an error
  }
}

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  // style: "currency",
  currency: "INR",
});
