import dayjs from 'dayjs';
import { IJobs } from 'app/shared/model/jobs.model';

export interface ICategory {
  id?: number;
  name?: string;
  createdBy?: number | null;
  createdDate?: string | null;
  updateDate?: string | null;
  updateBy?: number | null;
  jobs?: IJobs[] | null;
}

export const defaultValue: Readonly<ICategory> = {};
