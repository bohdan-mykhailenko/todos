export enum SortFields {
  TITLE = 'title',
  STATUS = 'status',
  PRIORITY = 'priority',
  DEFAULT = 'default',
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
  DEFAULT = 'default',
}

export interface SortValues {
  field: SortFields;
  order: SortOrder;
}
