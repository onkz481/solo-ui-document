// docs
import ja from './ja'
import en from './en'

export default class Docs {

  internalLocale = 'ja'
  internalDocs = {
    ja,
    en
  }

  orders = [
    'introductions',
    'utilities',
    'styles',
    'components',
    'internals'
  ]

  latestDoc = {
    name: undefined,
    category: undefined,
    value: undefined
  }

  constructor(locale){
    this.locale = locale
  }

  /* setter, getter */
  // 現在の言語の取得・設定
  set locale(locale){
    if( !Object.keys(this.internalDocs).includes(locale) ) return

    this.internalLocale = locale
  }
  get locale(){
    return this.internalLocale
  }

  // 選択されている言語のドキュメント取得
  get docs(){
    return this.internalDocs[this.internalLocale]
  }

  // 選択されているカテゴリのドキュメント一覧
  get selectedDocs(){
    return this.docs && this.docs[this.latestDoc.category]
  }

  // 一つ前のドキュメント情報を取得
  get prev(){
    let docNames = Object.keys(this.selectedDocs)
    let docIndex = docNames.indexOf(this.latestDoc.name)

    if( (docIndex - 1) >= 0 ){
      let docName = docNames[docIndex - 1]

      return {
        name: docName,
        category: this.latestDoc.category,
        value: this.selectedDocs[docName]
      }
    }

    let categoryIndex = this.orders.indexOf(this.latestDoc.category)

    if( (categoryIndex - 1) >= 0 ){
      let category = this.orders[categoryIndex - 1]
      docNames = Object.keys(this.docs[category])

      let docName = docNames[docNames.length - 1]

      return {
        name: docName,
        category: category,
        value: this.docs[category][docName]
      }
    }

    return undefined
  }

  // 一つ先のドキュメント情報を取得
  get next(){
    let docNames = Object.keys(this.selectedDocs)
    let docIndex = docNames.indexOf(this.latestDoc.name)

    if( (docIndex + 1) < docNames.length ){
      let docName = docNames[docIndex + 1]

      return {
        name: docName,
        category: this.latestDoc.category,
        value: this.selectedDocs[docName]
      }
    }

    let categoryIndex = this.orders.indexOf(this.latestDoc.category)

    if( (categoryIndex + 1) < this.orders.length ){
      let category = this.orders[categoryIndex + 1]
      docNames = Object.keys(this.docs[category])

      let docName = docNames[0]

      return {
        name: docName,
        category: category,
        value: this.docs[category][docName]
      }
    }

    return undefined
  }

  /* func */
  // ドキュメントを取得
  doc(category, name){
    const doc = this.docs[category][name]

    if( !doc ) return

    this.latestDoc.name = name // 最後に取得したドキュメント名を格納
    this.latestDoc.category = category // 最後に取得したカテゴリーを格納
    this.latestDoc.value = doc // 最後に取得したドキュメントデータを格納

    return doc
  }
}