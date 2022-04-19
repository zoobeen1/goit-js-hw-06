/* Напиши скрипт управления формой логина.

Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет
 именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство
  elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. */
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); //Предотвращает перезагрузку страницы

  const {
    elements: { email, password }, //Деструктуризация свойства elements
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Заполните, пожалуйста, все поля!");
    return;
  }
  const user = {
    email: email.value,
    password: password.value,
  };

  console.log(user);
  event.currentTarget.reset();
}
