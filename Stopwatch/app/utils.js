import moment from 'moment'

export function formatTime(interval) {
  const pad = n => n < 10 ? '0' + n : n
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return pad(duration.minutes()) + ':' + pad(duration.seconds()) + ',' + pad(centiseconds)
}
