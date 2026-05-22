// Shared in-memory auth gate untuk semua brand admin
// Reset otomatis saat refresh, tetap true saat pindah halaman SPA
let authedThisSession = false;

export function markAdminAuthedSession() {
  authedThisSession = true;
}

export function clearAdminAuthedSession() {
  authedThisSession = false;
}

export function isAdminAuthedSession() {
  return authedThisSession;
}
