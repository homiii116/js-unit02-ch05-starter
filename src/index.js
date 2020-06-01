import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = 'ja';
  }

  setup() {
    /* 
      現在のLocaleに合わせて、polyglotにメッセージをセットします。
      メッセージのセットにはpolyglot.extend()を利用します。
    */
    if (this.currentLocale === 'ja') {
      this.polyglot.extend({
        'hello': 'こんにちは、世界'
      });
    } else {
      this.polyglot.extend({
        'hello': 'Hello, World'
      });
    }   
  }

  updateLocale(e) {
    /*
      ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    */
  }

  showMessage() {
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。
    */
    const mainEl = document.getElementById('main');
    mainEl.innerHTML = `<h1>${this.polyglot.t('hello')}<h1>`;
  }

}

const app = TranslationApp();

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);
  
  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);
}
