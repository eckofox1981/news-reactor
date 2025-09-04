export function checkDarkmode() {
  //checks for darkmode
}

export function setDarkMode() {
  const darkMode = localStorage.getItem("darkmode");

  if (darkMode === null || darkMode === "inactive") {
    console.log(false);

    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
  }

  if (darkMode === "active") {
    console.log(true);

    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", "inactive");
  }
}
