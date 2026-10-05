export type AttendanceStatus = "confirmed" | "declined";

export type Guest = {
  id: string;
  name: string;
  attendance_status: AttendanceStatus;
  created_at: string;
  updated_at: string;
};
