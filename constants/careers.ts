/**
 * Open roles listed on /careers. Each one gets an "Apply" link that types
 * its title into the form's Role field (/careers?role=<slug>#apply).
 *
 * Leave the list empty when nothing is open: the page then invites general
 * applications instead of showing an empty board.
 */
import type { JobOpening } from "./types";

export const JOB_OPENINGS: JobOpening[] = [
];

// CVs are mailed as attachments through Microsoft Graph, which caps a whole
// send at 4MB. Base64 inflates the file by a third, so 2.5MB is the largest
// round size that still fits with the rest of the message.
export const CV_MAX_MB = 2.5;
export const CV_MAX_BYTES = CV_MAX_MB * 1024 * 1024;
export const CV_ACCEPT = ".pdf,.doc,.docx";
