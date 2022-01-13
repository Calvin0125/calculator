class App {
  constructor() {
    this.$entry = $('#entry');
    this.$operation = $('#operation');
    this.bindEvents();
  }

  bindEvents() {
    $('.number-char').on('click', $.proxy(this.handleNumberCharClick, this));
    $('.operator').on('click', $.proxy(this.handleOperatorClick, this));
    $('#CE').on('click', $.proxy(this.handleCE, this));
    $('#C').on('click', $.proxy(this.handleC, this));
    $('#NEG').on('click', $.proxy(this.handleNEG, this));
    $('#equals').on('click', $.proxy(this.handleEquals, this));
  }

  handleNumberCharClick(event) {
    let clickedChar = $(event.target).text();

    if (this.$entry.text() === "0") {
      $('#entry').text(clickedChar);
    } else {
      this.$entry.text(this.$entry.text() + clickedChar);
    }
  }

  handleOperatorClick(event) {
    let newOperationText = this.$operation.text() + ' ' + this.$entry.text() + ' ' + $(event.target).text();
    this.$operation.text(newOperationText);
    this.$entry.text('0');
  }

  handleCE() {
    this.$entry.text('0');
  }

  handleC() {
    this.$entry.text('0');
    this.$operation.empty();
  }

  handleNEG() {
    let firstChar = this.$entry.text()[0];
    if (firstChar === '0') {
      return;
    } else if (firstChar === '-') {
      this.$entry.text(this.$entry.text().slice(1));
    } else {
      this.$entry.text('-' + this.$entry.text());
    }
  }

  handleEquals() {
    let operation = this.$operation.text() + ' ' + this.$entry.text();
    operation = operation.replace(/x/gi, '*');
    this.$entry.text(eval(operation));
    this.$operation.text('');
  }
}

$(() => new App);