export interface StatusColor {
  class: string;
  meaning: string;
}

export const statusColors: StatusColor[] = [
  { class: "status-0", meaning: "Complete, Resolved, Success, Active" },
  { class: "status-1", meaning: "Assigned, Information, Action Required" },
  { class: "status-2", meaning: "Processing, Info" },
  { class: "status-3", meaning: "Pending Approval, Warning" },
  { class: "status-4", meaning: "In Progress, Due Soon" },
  { class: "status-5", meaning: "Due Progress, Delayed, Danger" },
  { class: "status-6", meaning: "Pending Verification" },
  { class: "status-7", meaning: "On Hold" },
  { class: "status-8", meaning: "Not Started, Read Only" },
  { class: "status-9", meaning: "Cancelled, Void" }
];
