import { UserObject } from "../object/User";

const bob = new UserObject(
  252,
  "Bob69",
  "Robert",
  "Plant",
  80,
  "male",
  "London",
  "Great Britain",
  "user",
  "Test123"
);

if (localStorage.getItem("rn-users") === undefined) {
  localStorage.setItem("rn-users", JSON.stringify([bob]));
}
