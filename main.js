async function main() {
try {
  const movieName = document.getElementById("Name").value;
  if (movieName === "") {
  alert("Please enter a movie name.");
  return;
  }
//API
const apikey = "b4cdfba7";
const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apikey}`;
const response = await fetch(url);
const data = await response.json();
console.log(data);

document.getElementById("movieTitle").innerHTML = `Title: <b>${data.Title}</b>`;
document.getElementById("rating").innerHTML = `IMDB Rating:<b> ${data.imdbRating}</b><br> Release Year: <b>${data.Year}</b><br>Director Name: <b>${data.Director}</b><br>Description: <b>${data.Plot}<br><br><img src="${data.Poster}">`;

// Hide the input section after pressing the search button
const movieSection = document.querySelector(".movie");
movieSection.style.display = "none";
} catch (error) {
  alert(error);
  }
}

