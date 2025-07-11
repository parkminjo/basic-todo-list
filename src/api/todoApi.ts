import axios from "axios";
import { TODO_API } from "../constants/apiPath";
import { TODO_STATUS } from "../constants/todo";
import type { Todo } from "../types/todo.type";


export const todoClient = axios.create({
	baseURL:'http://localhost:4000/todoList',
})

export const getTodo = async (id: Todo['id']) => {
	try {
		const { data }: { data: Todo } = await todoClient.get(TODO_API.BY_ID(id));
		return data;
	} catch (error) {
		console.error('할 일 불러오기 실패', error);
		throw error;
	}
};

export type TodoFilter = 'completed' | 'pending';

export const getTodoList = async (filter?: TodoFilter) => {
	const searchParams = new URLSearchParams();

	if (filter === TODO_STATUS.COMPLETED) {
		searchParams.append(TODO_STATUS.COMPLETED, 'true');
	}

	if (filter === TODO_STATUS.PENDING) {
		searchParams.append(TODO_STATUS.COMPLETED, 'false');
	}

	const { data } =  await todoClient.get<Todo[]>(TODO_API.BY_FILTER(searchParams));
	return data;
};

export const addTodo = async (content: Todo['content']) => {
	await todoClient.post(TODO_API.ROOT, {
		content,
		completed: false,
	});
};

export const updateTodo = async ({id, currentCompleted} : {id: Todo['id'], currentCompleted: Todo['completed']}) => {
	await todoClient.patch(TODO_API.BY_ID(id), {
		completed: !currentCompleted,
	});
};

export const deleteTodo = async (id: Todo['id']) => {
	await todoClient.delete(TODO_API.BY_ID(id));
};