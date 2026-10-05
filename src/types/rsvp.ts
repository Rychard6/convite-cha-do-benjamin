import type { AttendanceStatus } from "./guest";

export type RsvpCompanionInput = {
  name: string;
};

export type RsvpRequest = {
  name: string;
  attendanceStatus: AttendanceStatus;
  companions: RsvpCompanionInput[];
  requestId: string;
};

export type RsvpResponse =
  | {
      success: true;
      guestId: string;
    }
  | {
      success: false;
      error: string;
      fieldErrors?: Partial<Record<"name" | "attendanceStatus" | "companions", string>>;
    };
