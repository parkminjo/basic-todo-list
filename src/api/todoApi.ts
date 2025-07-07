import axios from "axios";
import { TODO_API } from "../constants/apiPath";
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

	export const getTodoList = async () => {
		try {
			const { data }: { data: Todo[] } =  await todoClient.get(TODO_API.ROOT);
			return data;
		} catch (error) {
			console.error('할 일 목록 불러오기 실패', error);
			alert('할 일 목록을 불러오는데 실패하였습니다.');
		} 
};

export const addTodo = async (content: Todo['content']) => {
		try {
			await todoClient.post(TODO_API.ROOT, {
				content,
				completed: false,
			});

		} catch (error) {
			console.error('할 일 목록 추가 실패', error);
			alert('할 일을 추가하는데 실패하였습니다.');
		}
};

export const updateTodo = async ({id, currentCompleted} : {id: Todo['id'], currentCompleted: Todo['completed']}) => {
		try {
			await todoClient.patch(TODO_API.BY_ID(id), {
				completed: !currentCompleted,
			});

		} catch (error) {
			console.error('할 일 수정 실패', error);
			alert('할 일을 수정하는데 실패하였습니다.');
		}
};

export const deleteTodo = async (id: Todo['id']) => {
		try {
			await todoClient.delete(TODO_API.BY_ID(id));

		} catch (error) {
			console.error('할 일 삭제 실패', error);
			alert('할 일을 삭제하는데 실패하였습니다.');
		}
};