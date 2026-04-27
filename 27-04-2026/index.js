import fs from "fs/promises";

async function readFruits() {
  try {
    const data = await fs.readFile("./fruits.json", "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeFruits(fruits) {
  const data = JSON.stringify(fruits, null, 2);
  await fs.writeFile("./fruits.json", data, "utf-8");
}

async function getAllFruits() {
  return await readFruits();
}

async function getFruitById(id) {
  const fruits = await readFruits();
  const fruit = fruits.find(item => item.id === Number(id));

  if (!fruit) {
    console.log("Fruta não encontrada pelo ID.");
    return null;
  }

  return fruit;
}

async function getFruitByName(nome) {
  const fruits = await readFruits();

  const fruit = fruits.find(
    item => item.nome.toLowerCase() === nome.toLowerCase()
  );

  if (!fruit) {
    console.log("Fruta não encontrada com esse nome.");
    return null;
  }

  return fruit;
}

async function createFruit(nome, cor, preco) {
  const fruits = await readFruits();

  const alreadyExists = fruits.some(
    item => item.nome.toLowerCase() === nome.toLowerCase()
  );

  if (alreadyExists) {
    console.log("Essa fruta já está cadastrada.");
    return null;
  }

  const newFruit = {
    id: fruits.length > 0 ? fruits[fruits.length - 1].id + 1 : 1,
    nome,
    cor,
    preco
  };

  fruits.push(newFruit);
  await writeFruits(fruits);

  console.log("Fruta criada com sucesso.");
  return newFruit;
}

async function updateFruit(id, novoNome, novaCor, novoPreco) {
  const fruits = await readFruits();
  const index = fruits.findIndex(item => item.id === Number(id));

  if (index === -1) {
    console.log("Fruta não encontrada para atualização.");
    return null;
  }

  const alreadyExists = fruits.some(
    item =>
      item.nome.toLowerCase() === novoNome.toLowerCase() &&
      item.id !== Number(id)
  );

  if (alreadyExists) {
    console.log("Já existe outra fruta com esse nome.");
    return null;
  }

  fruits[index] = {
    ...fruits[index],
    nome: novoNome,
    cor: novaCor,
    preco: novoPreco
  };

  await writeFruits(fruits);

  console.log("Fruta atualizada com sucesso.");
  return fruits[index];
}

async function deleteFruit(id) {
  const fruits = await readFruits();
  const index = fruits.findIndex(item => item.id === Number(id));

  if (index === -1) {
    console.log("Fruta não encontrada para remoção.");
    return false;
  }

  fruits.splice(index, 1);
  await writeFruits(fruits);

  console.log("Fruta removida com sucesso.");
  return true;
}

async function resetFruits() {
  const initialFruits = [
    { id: 1, nome: "Kiwi", cor: "Verde", preco: 10.0 },
    { id: 2, nome: "Framboesa", cor: "Vermelha", preco: 5.0 },
    { id: 3, nome: "Tangerina", cor: "Laranja", preco: 6.5 }
  ];

  await writeFruits(initialFruits);
  console.log("Arquivo resetado.");
}
 
async function main() {
  await resetFruits();

  const allFruits = await getAllFruits();
  console.log(allFruits);

  const fruit = await getFruitById(1);
  console.log(fruit);

  const byName = await getFruitByName("banana");
  console.log(byName);

  const createdFruit = await createFruit("Abacaxi", "Amarelo", 8.5);
  console.log(createdFruit);

  const updatedFruit = await updateFruit(1, "Maçã Gala", "Vermelha", 9.0);
  console.log(updatedFruit);

  const deleted = await deleteFruit(3);
  console.log(deleted);

  const finalList = await getAllFruits();
  console.log(finalList);
}

main();