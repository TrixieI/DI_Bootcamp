async function movie() {
  let request = await fetch(
    `https://api.coindesk.com/v1/bpi/currentprice.json`
  );
  let request2 = await fetch(
    `https://cryptopanic.com/api/v1/posts/?auth_token=329dde44cc099b93a2891b87e6ec6a8f13f9fa93&public=true`
  );
  try {
    if (request.status === 200 && request2.status === 200) {
      let response = await request.json();
      let response2 = await request2.json();
      let value = document.getElementById("value");
      let news = document.getElementById("news");
      value.innerText = `${response.chartName}
      USD rate: ${response.bpi.USD.rate}
      EUR rate: ${response.bpi.EUR.rate}
      GBP rate: ${response.bpi.GBP.rate}
      `;
      news.innerText = `
       ${response2.results[0].title}

       ${response2.results[1].title}

       ${response2.results[2].title}

       ${response2.results[3].title}

       ${response2.results[4].title}

       ${response2.results[5].title}

       ${response2.results[6].title}

       ${response2.results[7].title}

       ${response2.results[8].title}`;
      console.log(response2);
    } else {
      throw new Error(error);
    }
  } catch (error) {
    console.log(error);
  }
}
movie();
