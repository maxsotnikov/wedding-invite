export const pluralize = (value: number, forms: Array<string>) => {
  const abs = value % 100
  const last = abs % 10

  if (abs > 10 && abs < 20) return forms[2]
  if (last >= 2 && last <= 4) return forms[1]
  if (last === 1) return forms[0]

  return forms[2]
}