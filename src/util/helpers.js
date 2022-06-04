
// 文字列をケバブケースに変換
export function toKebabCase(str){
  if (typeof str !== 'string') return str;

  str = str.replace(/^ *?[A-Z]/, function(allStr) { return allStr.toLowerCase(); });
  str = str.replace(/_/g, '-');
  str = str.replace(/ *?[A-Z]/g, function(allStr) { return '-' + allStr.replace(/ /g, '').toLowerCase(); });
  return str;
}


// 先頭文字を大文字に変換して返す
export function strUpperFirst(str){
  if( typeof str !== 'string' || str.length <= 0 ) return

  return `${str[0].toUpperCase()}${str.slice(1)}`
}

export function extractWithWord(source, start, end, inword = false){
  if( !source || !start || !end ) return

  const startIndex = source.indexOf(start)
  let text = source.slice(inword ? startIndex : (startIndex + start.length), source.length)

  const endIndex = text.lastIndexOf(end)

  if( startIndex < 0 || endIndex < 0 ) return

  return text.slice(0, inword ? endIndex + end.length : endIndex)
}

export function genExtractWithChar(source, start = '{', end = '}'){
  if( !source ) return

  let blankets = []
  let counter = 0

  source.split('').forEach(char => {
    if(char === end) {
      counter--
    }
    if(char === start) {
      counter++
      if(counter === 1) {
        blankets.push('')
        return // continue
      }
    }
    if(counter > 0) blankets[blankets.length - 1] += char
  })

  return `${start}${blankets[0]}${end}`
}