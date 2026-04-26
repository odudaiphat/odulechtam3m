export function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

export function isMobileDevice() {
  if (typeof navigator === "undefined") return false;

  return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

export function getZaloUrl(phone: string) {
  const normalizedPhone = normalizePhone(phone);

  if (isMobileDevice()) {
    return `zalo://conversation?phone=${normalizedPhone}`;
  }

  return `https://zalo.me/${normalizedPhone}`;
}

export function openZalo(phone: string) {
  if (typeof window === "undefined") return false;

  const zaloWindow = window.open(getZaloUrl(phone), "_blank", "noopener,noreferrer");
  return Boolean(zaloWindow);
}
