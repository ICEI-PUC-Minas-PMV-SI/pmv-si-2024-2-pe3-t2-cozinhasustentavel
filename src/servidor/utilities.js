import fs from "fs";

// Faz login:
export const performLogin = async (login) => {
  const data = await fs.promises.readFile("./database.json", "utf8");
  const parsedData = JSON.parse(data);

  return parsedData.usuarios.filter((entity) => {
    return entity.email === login.email;
  })[0];
};

// Pega array de um entidade:
export const readAllEntities = async (entityArray) => {
  const data = await fs.promises.readFile("./database.json", "utf8");
  const parsedData = JSON.parse(data);

  return parsedData[entityArray];
};

// Pega apenas uma entidade pelo id dela:
export const readOneEntity = async (id, entityArray) => {
  const data = await fs.promises.readFile("./database.json", "utf8");
  const parsedData = JSON.parse(data);

  return parsedData[entityArray].filter((entity) => {
    return entity.id === id;
  })[0];
};

// Adiciona uma nova entidade no array dessa entidade:
export const writeOneEntity = (entity, entityArray) => {
  fs.readFile("./database.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler arquivo:", err);
      return;
    }

    const obj = JSON.parse(data);

    obj[entityArray] = [...obj[entityArray], entity];

    const updatedJson = JSON.stringify(obj, null, 2);

    fs.writeFile("./database.json", updatedJson, "utf8", (err) => {
      if (err) {
        console.error("Erro ao escrever no arquivo:", err);
      } else {
        console.log("Arquivo atualizado");
      }
    });
  });
};

// Remove uma entidade:
export const deleteOneEntity = (id, entityArray) => {
  fs.readFile("./database.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler arquivo:", err);
      return;
    }

    const obj = JSON.parse(data);

    const newEntitiesArray = obj[entityArray].filter((entity) => {
      return entity.id !== id;
    });

    obj[entityArray] = newEntitiesArray;
    const updatedJson = JSON.stringify(obj, null, 2);

    fs.writeFile("./database.json", updatedJson, "utf8", (err) => {
      if (err) {
        console.error("Erro ao escrever no arquivo:", err);
      } else {
        console.log("Arquivo atualizado");
      }
    });
  });
};

// Editar uma entidade:
export const editOneEntity = (id, newEntity, entityArray) => {
  fs.readFile("./database.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler arquivo:", err);
      return;
    }

    const obj = JSON.parse(data);

    const newEntitiesArray = obj[entityArray].filter((entity) => {
      return entity.id !== id;
    });

    obj[entityArray] = [...newEntitiesArray, newEntity];
    const updatedJson = JSON.stringify(obj, null, 2);

    fs.writeFile("./database.json", updatedJson, "utf8", (err) => {
      if (err) {
        console.error("Erro ao escrever no arquivo:", err);
      } else {
        console.log("Arquivo atualizado");
      }
    });
  });
};
