import mongoose from "mongoose";
import actor from "./actor.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const actors = [
  {
    name: "Robert Downey Jr.",
    birthYear: 1965,
    totalFilms: 3,
    photo: "robert",
    bio: "An American actor best known for portraying Iron Man in the Marvel Cinematic Universe.",
    movies: ["Iron Man", "Avengers: Endgame", "Sherlock Holmes"],
  },
  {
    name: "Scarlett Johansson",
    birthYear: 1984,
    totalFilms: 3,
    photo: "scarlett",
    bio: "An American actress famous for playing Black Widow in Marvel films.",
    movies: ["Lucy", "Black Widow", "Avengers: Endgame"],
  },
  {
    name: "Tom Holland",
    birthYear: 1996,
    totalFilms: 3,
    photo: "tom",
    bio: "English actor known for playing Spider-Man in the Marvel Cinematic Universe.",
    movies: ["Spider-Man: Homecoming", "No Way Home", "Uncharted"],
  },
  {
    name: "Chris Evans",
    birthYear: 1981,
    totalFilms: 3,
    photo: "chris",
    bio: "American actor best known as Captain America.",
    movies: ["Captain America", "Avengers", "Knives Out"],
  },
  {
    name: "Emma Watson",
    birthYear: 1990,
    totalFilms: 3,
    photo: "emma",
    bio: "English actress famous for playing Hermione Granger in Harry Potter.",
    movies: ["Harry Potter", "Beauty and the Beast", "Little Women"],
  },
];

const connection = mongoose.connect(process.env.MONGODB_URI);
await actor.deleteMany({});
await actor.insertMany(actors);
export default actors;
