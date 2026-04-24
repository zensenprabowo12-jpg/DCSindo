let allowOnce = false;

export function markAdminAuthedOnce() {
  allowOnce = true;
}

export function consumeAdminAuthedOnce() {
  const ok = allowOnce;
  allowOnce = false;
  return ok;
}

