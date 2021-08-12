const jokeL = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokebtn");
jokeBtn.addEventListener("click", generateJoke);

//USING async await
generateJoke();
async function generateJoke() {
  const config = { headers: { Accept: "application/json" } };
  const res = await fetch(
    "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes",
    config
  );
  const data = await res.json();
  jokeL.innerHTML = data.setup + " " + data.punchline;
}

// USING .then();
// function generateJoke() {
//   const config = { headers: { Accept: "application/json" } };
//   fetch(
//     "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes",
//     config
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       jokeL.innerHTML = data.setup + " " + data.punchline;
//       console.log(data);
//     });
// }
