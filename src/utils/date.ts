export const isNearyExpire = (
  expiresDate: number,
  thresholdDays: number,
): boolean => {
  const expires = new Date(expiresDate);
  const now = new Date();

  const timeDiffExpires = Math.abs(now.getTime() - expires.getTime());

  // 1 day in milliseconds
  const oneDayMillis = thresholdDays * 24 * 60 * 60 * 1000;

  const isExpiresNear = timeDiffExpires < oneDayMillis;
  console.log('🚀 ~ isExpiresNear:', isExpiresNear);

  if (isExpiresNear) return true;
};
