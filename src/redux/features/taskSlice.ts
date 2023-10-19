import { FilterValues } from '@/types/FilterValues';
import { Priority } from '@/types/Priority';
import { SortValues } from '@/types/SortValues';
import { Status } from '@/types/Status';
import { Task } from '@/types/Task';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface taskState {
  updatingTask: Task | null;
  tasks: Task[];
}

const initialState: taskState = {
  updatingTask: null,
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setUpdatingTask: (state, action: PayloadAction<Task | null>) => {
      state.updatingTask = action.payload;
    },

    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },

    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const latestId = state.tasks.reduce((maxId, task) => {
        return task.id > maxId ? task.id : maxId;
      }, 0);

      const id = latestId + 1;

      state.tasks.push({ ...action.payload, id });
    },

    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );

      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },

    toggleTaskStatus: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);

      if (task) {
        switch (task.status) {
          case Status.NOT_COMPLETED:
            task.status = Status.IN_PROGRESS;
            break;

          case Status.IN_PROGRESS:
            task.status = Status.COMPLETED;
            break;

          case Status.COMPLETED:
            task.status = Status.NOT_COMPLETED;
            break;

          default:
            break;
        }
      }
    },
  },
});

export const {
  setTasks,
  setUpdatingTask,
  addTask,
  editTask,
  removeTask,
  toggleTaskStatus,
} = taskSlice.actions;

export default taskSlice.reducer;
