import { ToolInterface } from 'interfaces/tool';
import { SupplierInterface } from 'interfaces/supplier';
import { GetQueryInterface } from 'interfaces';

export interface StoreInterface {
  id?: string;
  name: string;
  location?: string;
  supplier_id: string;
  opening_hours?: string;
  closing_hours?: string;
  contact_number?: string;
  created_at?: any;
  updated_at?: any;
  tool?: ToolInterface[];
  supplier?: SupplierInterface;
  _count?: {
    tool?: number;
  };
}

export interface StoreGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  supplier_id?: string;
  opening_hours?: string;
  closing_hours?: string;
  contact_number?: string;
}
