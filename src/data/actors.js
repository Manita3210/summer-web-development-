import robert from "../assets/robert.jpg";
import scarlett from "../assets/scarlett.jpg";
import tom from "../assets/tom.jpg";
import chris from "../assets/chris.jpg";
import emma from "../assets/emma.jpg";

const actors = [
  {
    id: 1,
    name: "Robert Downey Jr.",
    birthYear: 1965,
    totalFilms: 3,
    photo: robert,
    bio: "An American actor best known for portraying Iron Man in the Marvel Cinematic Universe.",
    movies: ["Iron Man", "Avengers: Endgame", "Sherlock Holmes"],
  },
  {
    id: 2,
    name: "Scarlett Johansson",
    birthYear: 1984,
    totalFilms: 3,
    photo: scarlett,
    bio: "An American actress famous for playing Black Widow in Marvel films.",
    movies: ["Lucy", "Black Widow", "Avengers: Endgame"],
  },
  {
    id: 3,
    name: "Tom Holland",
    birthYear: 1996,
    totalFilms: 3,
    photo: tom,
    bio: "English actor known for playing Spider-Man in the Marvel Cinematic Universe.",
    movies: ["Spider-Man: Homecoming", "No Way Home", "Uncharted"],
  },
  {
    id: 4,
    name: "Chris Evans",
    birthYear: 1981,
    totalFilms: 3,
    photo: chris,
    bio: "American actor best known as Captain America.",
    movies: ["Captain America", "Avengers", "Knives Out"],
  },
  {
    id: 5,
    name: "Emma Watson",
    birthYear: 1990,
    totalFilms: 3,
    photo: emma,
    bio: "English actress famous for playing Hermonie Granger in Harry Potter,",
    movies: ["Harry Potter", "Beauty and the Beast", "Little Women"],
  },
];
export default actors;
