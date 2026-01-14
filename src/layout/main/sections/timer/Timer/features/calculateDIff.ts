export const calculateDiff = (finishTime: number): Array<number> => {
  const diff = Math.floor((finishTime - Date.now()) / 1000)

  if(diff <= 0) return [0, 0, 0, 0]

  return [
    Math.floor(diff / 86400),
    Math.floor((diff / 3600) % 24),
    Math.floor((diff / 60) % 60),
    Math.floor(diff % 60)
  ]
}