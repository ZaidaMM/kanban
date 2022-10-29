import { Key } from "react";

export interface IBoardsData {
  _id: Key | null | undefined;
  name: string | undefined;
  columns?:IColumnsData[];
  customClass?: string;
 
}

export interface IColumnsData {
  _id: Key | null | undefined;
  name?: string | undefined;
  tasks?: ITasksData[];
  quantity? : number | string;
  customClass?: string;
  color?: string;
}

export interface ITasksData {
  _id: Key | null | undefined;
  title?: string | undefined;
  description?: string | undefined;
  status?: string | undefined;
  customClass?: string | undefined;
  subtasks?: ISubtasksData[];
  completedSubtasks? : number | string;
  totalSubtasks?:number | string;

}

export interface ISubtasksData {
  subtaskTitle?: string | undefined;
  isCompleted?: number | string;
  totalSubtasks: number | string;
  customClass?: string | undefined;
}