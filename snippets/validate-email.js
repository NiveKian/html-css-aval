export default function verifyEmail(email) {
  if (!email) return false;

  // normaliza
  email = email.trim().toLowerCase();

  // regex prática (não perfeita, mas confiável)
  const emailRegex =
    /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (!emailRegex.test(email)) return false;

  // regras extras (evita casos inválidos comuns)
  if (email.includes("..")) return false;
  if (email.startsWith(".") || email.endsWith(".")) return false;

  return true;
}