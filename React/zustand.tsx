//yarn add zustand

// src/store/task.ts
import { create } from "zustand";

type TaskTypes = {
    id: string | number;
    text: string;
};

type TaskStoreTypes = {
    slogan: string;
    tasks: TaskTypes[];
    addTask: (text: string) => void;
    removeTask: (id: string | number) => void;
    editTask: (id: string | number, text: string) => void;
    changeSlogan: () => void;
};

export const useTaskStore = create<TaskStoreTypes>((set) => ({
    slogan: "Projeto de teste",
    tasks: [],
    addTask: (text) =>
        set((state) => ({
            tasks: [...state.tasks, { id: Date.now(), text: text }],
        })),
    removeTask: (id) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        })),
    editTask: (id, text) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, text: text } : task
            ),
        })),
    changeSlogan: () =>
        set(() => ({
            slogan: "Projeto de teste 123",
        })),
}));


//-------------------------------------------------------------------------------------------------------------------------------------

// uso:
// src/pages/Task.tsx:


import { useState, type FormEvent } from "react";
import { useTaskStore } from "../store/task";

export default function Tasks() {
    const [newTask, setNewTask] = useState("");
    const { tasks, addTask, editTask, removeTask } = useTaskStore();

    const handleAddTask = (e: FormEvent): void => {
        e.preventDefault();
        addTask(newTask);
        setNewTask("");
    };

    return (
        <main className="p-3">
            <h1 className="mb-3 text-slate-700">0 Tarefas:</h1>
            <form className="flex gap-2" onSubmit={handleAddTask}>
                <input
                    type="text"
                    className="border border-zinc-400 rounded-sm outline-none px-2"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-slate-600 text-white px-2 py-1 rounded-lg cursor-pointer active:relative active:top-[1px]"
                >
                    Adicionar
                </button>
            </form>
            <ul className="flex flex-col gap-3 mt-10">
                {tasks.map((task) => (
                    <li className="flex items-center gap-4" key={task.id}>
                        <span className="text-slate-700">{task.text}</span>
                        <button
                            className="bg-emerald-600 text-white px-2 py-1 rounded-lg cursor-pointer active:relative active:top-[1px]"
                            onClick={() =>
                                editTask(
                                    task.id,
                                    prompt("Novo nome da tarefa:", task.text) ||
                                        task.text
                                )
                            }
                        >
                            Editar
                        </button>
                        <button
                            className="bg-red-400 text-white px-2 py-1 rounded-lg cursor-pointer active:relative active:top-[1px]"
                            onClick={() => removeTask(task.id)}
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
