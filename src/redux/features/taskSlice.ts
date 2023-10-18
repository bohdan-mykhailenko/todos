import { Task } from '@/types/Task';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface taskState {
  isAddFormOpenned: boolean;
  tasks: Task[];
}

const initialState: taskState = {
  isAddFormOpenned: false,
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setIsAddFormOpenned: (state, action: PayloadAction<boolean>) => {
      state.isAddFormOpenned = action.payload;
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

    // edittask: (state, action: PayloadAction<id, Partial<Task>>) => {
    //   const index = state.tasks.findIndex(
    //     (task) => task.id === action.payload.id,
    //   );

    //   if (index !== -1) {
    //     state.tasks[index] = action.payload;
    //   }
    // },
  },
});

export const { setIsAddFormOpenned, setTasks, addTask, removeTask } =
  taskSlice.actions;

export default taskSlice.reducer;
