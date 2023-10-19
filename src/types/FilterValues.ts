import { Priority } from './Priority';
import { Status } from './Status';

type StatusFilterValue = Status | 'all';
type PriorityFilterValue = Priority | 'all';

export interface FilterValues {
  query: string;
  status: StatusFilterValue;
  priority: PriorityFilterValue;
}
