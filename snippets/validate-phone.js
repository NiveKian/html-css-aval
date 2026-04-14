export default function verifyPhone(phoneNumber) {
  if (!phoneNumber) return false;

  // remove tudo que não é número
  const cleaned = phoneNumber.replace(/\D/g, "");

  // formato esperado:
  // 11987654321 (11 dígitos)
  if (cleaned.length !== 11) return false;

  const ddd = cleaned.slice(0, 2);
  const firstDigit = cleaned[2];

  // DDD válido (simplificado)
  if (parseInt(ddd) < 11 || parseInt(ddd) > 99) return false;

  // celular no Brasil começa com 9
  if (firstDigit !== "9") return false;

  return true;
}