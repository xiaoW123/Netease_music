import { time } from 'console'

// 1.图片添加大小参数
export function imgUrlFortmat(
  url: string,
  width: number,
  height: number = width
) {
  // 当只传入width时，height默认跟width一样
  return url + `?param=${width}x${height}`
}

// 2.播放量格式化
export function countsFormat(counts: number) {
  let str: string = ''
  if (counts > 100000) {
    return (str = Math.floor(counts / 10000) + '万')
  }
  return counts
}
// 3.播放音乐
export function getPlayerUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

// 4.时间格式化
export function formatTime(time: number) {
  const timeSeconds = time / 1000
  const minute = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds) % 60

  const formatMinute = String(minute).padStart(2, '0') // 第二位，用0补
  const formatSecond = String(second).padStart(2, '0') // 第二位，用0补
  return `${formatMinute}:${formatSecond}`
}

// 5.歌词解析
interface ILyric {
  time: number
  text: string
}
// 歌词：[00:42.774] 仔细搜索着自己的身体试着找出一道合理的伤
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
// 传入歌词字符串
export function parseLyric(lyricString: string) {
  const lyrics: ILyric[] = [] // 用来存储歌词数组，有time和text属性
  // 1.拿到数据
  const lines: string[] = lyricString.split('\n')
  // 2.匹配结果
  for (const line of lines) {
    // 匹配结果,exec：返回匹配到的结果数组
    const results = timeRegExp.exec(line) // console.log(results) //['[00:00.000]', '00', '00', '000']
    if (!results) continue // 如果没有匹配到，就跳出这次循环
    // 把数据处理出毫秒
    const time1 = Number(results[1]) * 60 * 1000
    const time2 = Number(results[2]) * 1000
    const time3 =
      results[3].length === 2 ? Number(results[3]) * 10 : Number(results[3])
    const time = time1 + time2 + time3

    // 3.把处理好的数据添加到lyrics数组
    const text = line.replace(timeRegExp, '')
    lyrics.push({ time, text })
  }

  return lyrics
}
