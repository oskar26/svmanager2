/*
  # Initial Schema Setup for School Management System

  1. New Tables
    - `students`
      - `id` (uuid, primary key)
      - `name` (text)
      - `class` (text)
      - `created_at` (timestamp)
    
    - `bans`
      - `id` (uuid, primary key)
      - `student_id` (uuid, foreign key)
      - `reason` (text)
      - `start_date` (timestamp)
      - `end_date` (timestamp)
      - `notes` (text, optional)
      - `created_at` (timestamp)
    
    - `equipment`
      - `id` (uuid, primary key)
      - `name` (text)
      - `type` (enum: FOOTBALL, BASKETBALL, VOLLEYBALL, OTHER)
      - `status` (enum: AVAILABLE, BORROWED, MAINTENANCE)
      - `created_at` (timestamp)
    
    - `lendings`
      - `id` (uuid, primary key)
      - `equipment_id` (uuid, foreign key)
      - `student_name` (text)
      - `student_class` (text)
      - `borrow_time` (timestamp)
      - `return_time` (timestamp, optional)
      - `is_overdue` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to perform CRUD operations
*/

-- Create custom types
CREATE TYPE equipment_type AS ENUM ('FOOTBALL', 'BASKETBALL', 'VOLLEYBALL', 'OTHER');
CREATE TYPE equipment_status AS ENUM ('AVAILABLE', 'BORROWED', 'MAINTENANCE');

-- Create students table
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  class text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create bans table
CREATE TABLE IF NOT EXISTS bans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  reason text NOT NULL,
  start_date timestamptz NOT NULL,
  end_date timestamptz NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Create equipment table
CREATE TABLE IF NOT EXISTS equipment (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type equipment_type NOT NULL,
  status equipment_status NOT NULL DEFAULT 'AVAILABLE',
  created_at timestamptz DEFAULT now()
);

-- Create lendings table
CREATE TABLE IF NOT EXISTS lendings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  equipment_id uuid REFERENCES equipment(id) ON DELETE CASCADE,
  student_name text NOT NULL,
  student_class text NOT NULL,
  borrow_time timestamptz NOT NULL DEFAULT now(),
  return_time timestamptz,
  is_overdue boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE bans ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE lendings ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users
CREATE POLICY "Allow authenticated users to read students"
  ON students FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to insert students"
  ON students FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update students"
  ON students FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to delete students"
  ON students FOR DELETE TO authenticated USING (true);

-- Repeat similar policies for other tables
CREATE POLICY "Allow authenticated users to read bans"
  ON bans FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to insert bans"
  ON bans FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update bans"
  ON bans FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to delete bans"
  ON bans FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to read equipment"
  ON equipment FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to insert equipment"
  ON equipment FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update equipment"
  ON equipment FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to delete equipment"
  ON equipment FOR DELETE TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to read lendings"
  ON lendings FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to insert lendings"
  ON lendings FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update lendings"
  ON lendings FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Allow authenticated users to delete lendings"
  ON lendings FOR DELETE TO authenticated USING (true);