import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

import type { Attendance } from '$lib/Attendance';
import type { Gradebook } from '$lib/Gradebook';
import type { ReportCardListEntity } from '$lib/ReportCardListEntity';
import type { StudentInfo } from '$lib/StudentInfo';
import type { StudentAccount } from '$lib/synergy';
import type { DocumentsList } from './DocumentsList';
import type { Message } from './Message';

export const studentAccount: Writable<StudentAccount | undefined> = writable();

export const gradebook: Writable<Gradebook | undefined> = writable();

export const gradebookLoaded = writable(false);

export const attendance: Writable<Attendance | undefined> = writable();

export const attendanceLoaded = writable(false);

export const studentInfo: Writable<StudentInfo | undefined> = writable();

export const studentInfoLoaded = writable(false);

export const reportCardList: Writable<ReportCardListEntity[] | undefined> = writable();

export const reportCardListLoaded = writable(false);

export const documentsList: Writable<DocumentsList | undefined> = writable();

export const documentsListLoaded = writable(false);

export const messages: Writable<Message[] | undefined> = writable();

export const messagesLoaded = writable(false);
