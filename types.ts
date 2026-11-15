import { Timestamp } from 'firebase/firestore';

export type UserRole = 'student' | 'parent' | 'assistant';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export interface PublicUser {
  uid: string;
  displayName: string;
  role: UserRole;
  isOnline: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface PrivateUser {
  uid: string;
  email: string;
  phone: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface StudentProfile {
  id: string;
  studentName: string;
  grade: string;
  linkCode: string;
  studentUid: string;
  parentUid: string;
  assistantUid: string;
  assistantOnline: boolean;
  focusMinutesTotal: number;
  treeLevel: number;
  streakDays: number;
  createdBy: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type AssignmentType = 'today' | 'extra';
export type AssignmentStatus = 'pending' | 'submitted' | 'graded';

export interface Assignment {
  id: string;
  studentId: string;
  studentUid: string;
  parentUid: string;
  assistantUid: string;
  createdBy: string;
  type: AssignmentType;
  subject: string;
  title: string;
  description: string;
  dueLabel: string;
  status: AssignmentStatus;
  photoDataUrl: string;
  studentNote: string;
  submittedAtMs: number;
  feedbackScheduledAtMs: number;
  instantFeedbackNote: string;
  assistantFeedback: string;
  scoreLabel: string;
  gradedBy: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface FocusSession {
  id: string;
  studentId: string;
  studentUid: string;
  parentUid: string;
  assistantUid: string;
  durationMinutes: number;
  treeStage: string;
  note: string;
  createdBy: string;
  createdAt: Timestamp;
}

export interface Message {
  id: string;
  studentId: string;
  studentUid: string;
  parentUid: string;
  assistantUid: string;
  senderUid: string;
  senderName: string;
  senderRole: UserRole;
  content: string;
  createdAt: Timestamp;
}

export type ScheduleStatus = 'requested' | 'confirmed' | 'completed' | 'cancelled';

export interface Schedule {
  id: string;
  studentId: string;
  studentUid: string;
  parentUid: string;
  assistantUid: string;
  createdBy: string;
  title: string;
  dateStr: string;
  timeStr: string;
  note: string;
  status: ScheduleStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type TicketCategory = 'feedback' | 'support' | 'management';
export type TicketStatus = 'open' | 'replied' | 'closed';

export interface FeedbackTicket {
  id: string;
  studentId: string;
  studentUid: string;
  parentUid: string;
  assistantUid: string;
  createdBy: string;
  category: TicketCategory;
  subject: string;
  message: string;
  reply: string;
  repliedBy: string;
  status: TicketStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type WeeklyReportAuthorRole = 'parent' | 'assistant';
export type WeeklyReportStatus = 'published' | 'reviewed';

export interface WeeklyReport {
  id: string;
  studentId: string;
  studentUid: string;
  parentUid: string;
  assistantUid: string;
  createdBy: string;
  authorName: string;
  authorRole: WeeklyReportAuthorRole;
  weekLabel: string;
  weekStartDate: string;
  weekEndDate: string;
  completedTasksCount: number;
  totalTasksCount: number;
  focusMinutesWeek: number;
  strengths: string;
  improvements: string;
  nextWeekPlan: string;
  parentNote: string;
  status: WeeklyReportStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type TimetableDay = 'T2' | 'T3' | 'T4' | 'T5' | 'T6' | 'T7' | 'CN';
export type TimetableStudyType = 'tutor' | 'self' | 'school' | 'extra';

export interface TimetableEntry {
  id: string;
  studentId: string;
  studentUid: string;
  parentUid: string;
  assistantUid: string;
  createdBy: string;
  dayOfWeek: TimetableDay;
  startTime: string;
  endTime: string;
  subject: string;
  topic: string;
  studyType: TimetableStudyType;
  note: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

