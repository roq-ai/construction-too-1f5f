import { RentalInterface } from 'interfaces/rental';
import { ReviewInterface } from 'interfaces/review';
import { StoreInterface } from 'interfaces/store';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  type?: string;
  brand?: string;
  price_per_day?: number;
  store_id: string;
  available?: boolean;
  created_at?: any;
  updated_at?: any;
  rental?: RentalInterface[];
  review?: ReviewInterface[];
  store?: StoreInterface;
  _count?: {
    rental?: number;
    review?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  brand?: string;
  store_id?: string;
}
