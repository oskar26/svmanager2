export interface Student {
  id: string;
  name: string;
  class: string;
  created_at: string;
}

export interface Ban {
  id: string;
  student_id: string;
  reason: string;
  start_date: string;
  end_date: string;
  notes?: string;
  created_at: string;
}

export interface Equipment {
  id: string;
  name: string;
  type: 'FOOTBALL' | 'BASKETBALL' | 'VOLLEYBALL' | 'OTHER';
  status: 'AVAILABLE' | 'BORROWED' | 'MAINTENANCE';
  created_at: string;
}

export interface Lending {
  id: string;
  equipment_id: string;
  student_name: string;
  student_class: string;
  borrow_time: string;
  return_time?: string;
  is_overdue: boolean;
  created_at: string;
}