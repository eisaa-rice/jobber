export type JobType =
  | "internship"
  | "co-op"
  | "part-time"
  | "full-time"
  | "contract"
  | "other";

export type JobStatus =
  | "applied"
  | "online assessment"
  | "screen"
  | "interview"
  | "rejected"
  | "ghosted"
  | "offer";

export interface Job {
  id: string;
  user_id: string;
  company: string;
  position: string;
  job_type: JobType | null;
  application_status: JobStatus | null;
  job_link: string | null;
  notes: string | null;
  tags: string[] | null;
  created_at: string;
}
