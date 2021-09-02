// create text-input 
class TextInput extends HTMLElement {
  tmpl = `


  <style>
    .title {
      padding: 0.5rem;
      font-weight: bold;
      margin: 0.5rem 0;
    }

    input[type='text'] {
      padding: 5px;
    }
  </style>
  <div class="input-text">
    <div class="title">title</div>
    <div class="desc">desc</div>
    <div class="control">
      <input type="text">
    </div>
  </div>

  `
  constructor() {
    super();
    // let template = document.getElementById('text-input-template');
    let template = document.createRange().createContextualFragment(this.tmpl)
    let titleContent = this.getAttribute("title")
    let descContent = this.getAttribute("desc")
    let min = this.getAttribute("min")
    let max = this.getAttribute("max")
    let required = this.getAttribute("required")
    let ti = template.cloneNode(true);
    let control = ti.querySelector("input")
    ti.querySelector(".title").innerHTML = titleContent
    ti.querySelector(".desc").innerHTML = descContent
    control.setAttribute("minlength", min)
    control.setAttribute("maxlength", max)
    if (required != null) {
      control.setAttribute("required", "")
    }
    this.attachShadow({ mode: 'open' }).appendChild(ti);
  }
}

customElements.define('text-input', TextInput);