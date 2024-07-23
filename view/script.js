const url = "http://localhost:8080/task/user/1";

const hideLoader = () => {
  document.querySelector("#loading").style.display = "none";
};

const show = (tasks) => {
  let tab = `
        <thead>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Username</th>
            <th scope="col">User Id</th>
        </thead>`;

  for (let task of tasks) {
    tab += `
            <tr>
                <td scope="row">${task.id}</td>
                <td>${task.description}</td>
                <td>${task.user.username}</td>
                <td>${task.user.id}</td>
            </tr>`;
  }

  document.querySelector("#tasks").innerHTML = tab;
};

const getAPI = async (url) => {
  const responseAPI = await fetch(url);
  let data = await responseAPI.json();

  if (responseAPI) {
    hideLoader();
    show(data);
  }
};

getAPI(url);
