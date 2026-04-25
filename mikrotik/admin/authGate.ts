// In-memory gate:
// - Reset otomatis saat refresh (karena memory hilang)
// - Tetap true saat pindah halaman SPA (Dashboard -> New/Edit)
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

