import { Priority } from './Priority';
import { Status } from './Status';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
}
