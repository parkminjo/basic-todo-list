import type { Todo } from "../types/todo.type";

export const TODO_API = {
	ROOT: '/',
	BY_ID: (id: Todo['id']) => `/${id}`,
	BY_FILTER: (filter: URLSearchParams) => `?${filter}`
}