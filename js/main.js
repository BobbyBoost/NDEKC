const btnDarkMode = document.querySelector(".dark-mode-btn");

//Перевірка темної теми на рівні системних налаштувань
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
	btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}


// Перевірка темної теми в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
	btnDarkMode.classList.remove("dark-mode-btn--active");
	document.body.classList.remove("dark");
}

// Якщо змінюются системні налаштування, то міняється тема
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
	const newColorScheme = event.matches ? "dark" : "light";
	
	if (newColorScheme === "dark") {
			btnDarkMode.classList.add("dark-mode-btn--active");
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "dark");
		} else {
			btnDarkMode.classList.remove("dark-mode-btn--active");
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "light");
		}
	});


// Увімкнення нічного режиму по кнопці
btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle("dark-mode-btn--active");
	const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
}


// Заявки на пошту через форму
var btn = document.getElementById("btn");
btn.addEventListener("click", function(e) {
	e.preventDefault()
	var name = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
	var body = "Ім'я: " + name + "<br> Номер: " + phone;

	Email.send({
	SecureToken : "1d90b1c4-e933-4d69-8347-647a004e7ed2",
	To : 'fladeaye@gmail.com',
	From : "contact@bloodygamingreview.com",
	Subject : "Новий запит на консультацію",
	Body : body
}).then(
message => alert("Дякуємо, заявку успішно надіслано!")
);
} )


