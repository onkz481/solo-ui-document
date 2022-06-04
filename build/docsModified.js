const nodeFs = require('fs')
const nodePath = require('path')
const format = require('date-fns/format')

function genModified(path, tmp){

  tmp = tmp ? tmp : {}
  let files = nodeFs.readdirSync(path)

  files.forEach(file => {
    var filePath = `${path}/${file}`
    var stat = nodeFs.statSync(filePath)

    if( stat.isDirectory() ){
      tmp[file] = genModified(filePath, tmp[file])
    } else {
      var parse = nodePath.parse(file)

      if( parse.ext === '.md' ) tmp[parse.name] = format(new Date(stat.mtime), 'yyyy/MM/dd HH:mm:ss')
    }
  })

  return tmp
}

// console color
let green = '\u001b[32m'
let reset = '\u001b[0m'

// var
let dir = 'src/data'

try{
  nodeFs.mkdirSync(dir)

  nodeFs.writeFileSync('src/data/docsModified.json', JSON.stringify(genModified('./src/documents')))

  console.log(`${green}created doscModified.json successfully. ==> ${dir}${reset}`)
}catch(e){
  switch(e.code){
    case 'EEXIST':
      nodeFs.writeFileSync('src/data/docsModified.json', JSON.stringify(genModified('./src/documents')))

      console.log(`${green}created doscModified.json successfully. ==> ${dir}${reset}`)
      break
    default:
      console.log(e)
  }
}