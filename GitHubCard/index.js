/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// axios.get("https://api.github.com/users/HeftyB")


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


let cards = document.querySelector(".cards");

function NewCard (data) {

  let { avatar_url, name, login, location, html_url, followers, following, bio } = data;

  let card = document.createElement("div");
  let img = document.createElement("img");
  let cardInfo = document.createElement("div");
  let names = document.createElement("h3");
  let userName = document.createElement("p");
  let locations = document.createElement("p");
  let profile = document.createElement("p");
  let urls = document.createElement("a");
  let followerss = document.createElement("p");
  let followings = document.createElement("p");
  let bios = document.createElement("p");


  card.classList.add("card");
  cardInfo.classList.add("card-info");
  names.classList.add("name");
  userName.classList.add("username");
  
  img.setAttribute("src", `${avatar_url}`);
  urls.setAttribute("href", `${html_url}`);

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(names);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(locations);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followerss);
  cardInfo.appendChild(followings);
  cardInfo.appendChild(bios);
  profile.appendChild(urls);


  names.textContent = `${name}`;
  userName.textContent = `${login}`;
  locations.textContent = `${location}`;
  urls.textContent = `${html_url}`;
  followerss.textContent = `${followers}`;
  followings.textContent = `${following}`;
  bios.textContent = `${bio}`;

  return card;


}

function addGit (userName) {
  axios.get(`https://api.github.com/users/${userName}`)
    .then( datas => {
      let newCard = cards.appendChild(NewCard(datas.data))
    })
    .catch( data => {
      console.log(data);
      debugger
    })
    .finally(() => {
      console.log(`ITS FINISHED!`);
    })
}


followersArray.unshift("HeftyB", "bigknell", "tetondan", "dustinmyers", "justsml", "luishrd");

followersArray.forEach( item => {
  addGit(item);
})


// debugger
// addGit("HeftyB");
// addGit("bigknell");
// addGit("tetondan");
// addGit("dustinmyers");
// addGit("justsml");
// addGit("luishrd");






