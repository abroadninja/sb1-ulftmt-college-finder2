export type TimeFrame = 'weekly' | 'monthly' | 'yearly';
export type Category = 'academic' | 'career' | 'personal' | 'health' | 'skills';
export type Priority = 'low' | 'medium' | 'high';

export interface Goal {
  id: string;
  title: string;
  category: Category;
  priority: Priority;
  date: string;
  completed: boolean;
}