export class UserObject {
  constructor(
    id,
    username,
    firstName,
    lastName,
    age,
    gender,
    city,
    state,
    role
  ) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.state = state;
    this.role = role;
  }
}

export async function fetchUser(userId) {
  try {
    const response = await fetch(`https://dummyjson.com/users/${userId}`, {
      method: "GET",
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    const returned = await response.json();
    console.log(returned);

    return new UserObject(
      returned.id,
      returned.username,
      returned.firstName,
      returned.lastName,
      returned.age,
      returned.gender,
      returned.address.city,
      returned.address.state,
      returned.role
    );
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
