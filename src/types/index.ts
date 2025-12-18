// TypeScript Types and Interfaces

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'partner' | 'manager' | 'senior' | 'consultant' | 'support';
  hourlyRate?: number;
  active: boolean;
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  industry?: string;
  country?: string;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  active: boolean;
}

export type DeliverableType =
  | 'LOCAL_FILE'
  | 'MASTER_FILE'
  | 'BENCHMARK_ANALYSIS'
  | 'IC_AGREEMENT'
  | 'TP_POLICY'
  | 'AOA_REPORT'
  | 'TRANSACTION_REPORT'
  | 'TP_AUDIT_SUPPORT'
  | 'SETTLEMENT_PROCEDURE'
  | 'APA_MAP_NEGOTIATION'
  | 'TP_PLANNING'
  | 'DISPUTE_RESOLUTION'
  | 'IP_VALUATION'
  | 'CBCR_SUPPORT'
  | 'LF_COMMENT_REVIEW'
  | 'MF_COMMENT_REVIEW';

export type ProjectStatus =
  | 'NOT_STARTED'
  | 'PLANNING'
  | 'DATA_GATHERING'
  | 'ANALYSIS'
  | 'DRAFTING'
  | 'INTERNAL_REVIEW'
  | 'CLIENT_REVIEW'
  | 'FINALIZATION'
  | 'DELIVERED'
  | 'ARCHIVED'
  | 'ON_HOLD'
  | 'WAITING_CLIENT'
  | 'WAITING_THIRD_PARTY'
  | 'REVISION_REQUIRED';

export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'completed' | 'cancelled';

export interface Project {
  id: string;
  clientId: string;
  projectName: string;
  deliverableType: DeliverableType;
  status: ProjectStatus;
  priority: Priority;
  startDate?: string;
  deadline?: string;
  estimatedHours?: number;
  actualHours: number;
  budget?: number;
  actualCost: number;
  projectManagerId: string;
  description?: string;
  riskLevel: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
  client?: Client;
  projectManager?: User;
  _count?: {
    tasks: number;
    documents: number;
  };
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  assignedTo: string;
  status: TaskStatus;
  priority: Priority;
  dueDate?: string;
  estimatedHours?: number;
  actualHours: number;
  createdAt: string;
  assignee?: User;
  project?: {
    id: string;
    projectName: string;
    client?: {
      name: string;
    };
  };
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: any;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}