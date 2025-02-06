export const mockDelay = (delay?: number): Promise<void> => {
  const ms = delay ?? 2000
  return new Promise(resolve => setTimeout(() => resolve(), ms))
}
