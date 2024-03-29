/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { BsBookmarkCheckFill, BsBrush, BsTrash } from "react-icons/bs";
import { CartContext } from "../../../contexts/CartContext";

interface VehiclesCardProps {
  img?: string;
  title?: string;
  price?: number;
}

const VehiclesCard: React.FC<VehiclesCardProps> = ({ img, title, price }) => {
  const { handleAddItemToCart } = useContext<any>(CartContext);

  const API: string = "http://localhost:5000";

  const [carOwner, setTitle] = useState<any>("");
  const [textArea, setTextArea] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [number, setNumber] = useState<any>("");
  const [time, setTime] = useState<any>("");
  const [todos, setTodos] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const res = await fetch(API + "/todos")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      setLoading(false);

      setTodos(res);
    };

    loadData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const todo = {
      id: Math.random(),
      carOwner,
      email,
      textArea,
      number,
      time,
      done: false,
    };

    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState: any) => [...prevState, todo]);

    setTitle("");
    setTime("");
    setNumber("");
    setEmail("");
    setTextArea("");
  };

  const handleDelete = async (id: any) => {
    await fetch(API + "/todos/" + id, {
      method: "DELETE",
    });

    setTodos((prevState: any) =>
      prevState.filter((todo: any) => todo.id !== id)
    );
  };

  const handleEdit = async (todo: any) => {
    todo.done = !todo.done;

    const data = await fetch(API + "/todos/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState: any) =>
      prevState.map((t: any) => (t.id === data.id ? (t = data) : t))
    );
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <div className="card">
        <img className="card-logo" src={img} alt="/next-logo.svg" />
        <h1 className="card-title">
          {title} R$ {price} - Ano de Fabricação 2022
        </h1>
        <button onClick={() => handleAddItemToCart(img, title, price)}>
          ADICIONAR AO CARRINHO
        </button>
        <div className="form-todo">
          <h2>DONOS:</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="carOwner">Qual o nome do Dono Atual?</label>
              <input
                type="text"
                name="carOwner"
                placeholder="Seu nome"
                onChange={(e) => setTitle(e.target.value)}
                value={carOwner || ""}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="time">Tempo que está com o Carro:</label>
              <input
                type="text"
                name="time"
                placeholder="Ex: 6 Meses ou Anos"
                onChange={(e) => setTime(e.target.value)}
                value={time || ""}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Seu email pessoal:</label>
              <input
                type="email"
                name="email"
                placeholder="Ex: meu@email.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="number">Telefone de contato:</label>
              <input
                type="number"
                name="number"
                placeholder="Ex: 21 9999-9999"
                onChange={(e) => setNumber(e.target.value)}
                value={number || ""}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="text">Conte para nós o que achou do carro:</label>
              <textarea
                name="textArea"
                placeholder="Ex: Carro muito confortável e funcionando muito bem."
                onChange={(e) => setTextArea(e.target.value)}
                value={textArea || ""}
                required
              />
            </div>
            <input type="submit" value="SOU O DONO ATUAL" />
          </form>
          <div className="list-todo">
            <h2>Lista de Donos:</h2>
            {todos.length === 0 && <p>Ainda não teve um dono.</p>}
            {todos.map((todo: any) => (
              <div className="todo" key={todo.id}>
                <h3 className={todo.done ? "todo-done" : ""}>
                  {todo.carOwner}
                </h3>
                <p>Celular de contato: {todo.number}</p>
                <p>Email de comprador: {todo.email}</p>
                <p>Tempo com o carro: {todo.time}</p>
                <p>Sua avaliação: {todo.textArea}</p>
                <div className="actions">
                  <span onClick={() => handleEdit(todo)}>
                    {!todo.done ? <BsBrush /> : <BsBookmarkCheckFill />}
                  </span>
                  <BsTrash onClick={() => handleDelete(todo.id)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesCard;
