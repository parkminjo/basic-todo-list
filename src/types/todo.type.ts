import type { Tables } from "./supabase"

type SupabaseTodo = Tables<'todo_list'>

export interface Todo {
  id: SupabaseTodo['id']
  createdAt: SupabaseTodo['created_at']
  content: SupabaseTodo['content']
  completed: SupabaseTodo['completed']
}