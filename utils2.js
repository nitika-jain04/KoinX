export default async function getMainCoin() {
  const options = {
    method: "GET",
    headers: { "x-cg-demo-api-key": "CG-PK42TrTwugtKpceqMPw5113G" },
  };

  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true&precision=2",
      options
    );
    const resData = await response.json();
    // console.log(resData);
    return resData;
  } catch (err) {
    console.error(err);
  }
}
