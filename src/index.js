import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = localStorage.getItem('locale') || 'ja';
    this.updateLocale = this.updateLocale.bind(this);
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
    e.preventDefault();
    const changeLocale = e.target.dataset.locale;
    this.updateLocale = localStorage.setItem(changeLocale);
    this.currentLocale = this.updateLocale.setup();
  }

  showMessage() {
    /*
      mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。
    */
    const mainEl = document.getElementById('main');
    mainEl.innerHTML = `<h1>${this.polyglot.t('hello')}<h1>`;
  }

}

{
  const app = new TranslationApp();
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);
  
  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);

  app.showMessage();
  
}
