export const padZero = (n: number) => {
  return n.toString().padStart(2, n < 10 ? '0' : '');
};

export const formatPlaybackTime = (time: number) => {
  const secondsInMinute = 60;
  const minutes = Math.floor(time / secondsInMinute);
  const seconds = Math.floor(time - minutes * secondsInMinute);

  return `${padZero(minutes)}:${padZero(seconds)}`;
};

export const sortByCreatedDate = <T extends { createdAt: string }>(
  arr: T[],
  order: 'asc' | 'desc' = 'desc'
) => {
  return [...arr].sort((a, b) => {
    return order === 'desc'
      ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
};
