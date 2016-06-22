var React = require('react');
//var ReactDOM = require('react-dom');

class Input extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   itemText: ''
    // }
    this.onAddClick = this.onAddClick.bind(this);
    //this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onAddClick(evt){
    evt.preventDefault();
    //var item = evt.target.value;
    //var item = this.input.value;
    var item = this.textInput.value;

    this.handleSubmit(item);
    console.log(this.textInput, 'from List!');
  }
  // onAddInputChanged(evt){
  //   var item = evt.target.value;
  //   this.setState({itemText: item});
  // }
  handleSubmit(item){
    console.log('submit');
    console.log(this.props.config, 'from handleSubmit');
    this.props.config.push(item);
    console.log(item, 'from handleSubmit');

  }

  render(){
    /*console.log(this.props, 'from Input');
    let { itemText } = this.state;
    console.log(this.props, 'from Input');*/
    return(
      <div className='input'>
        <form className='input__form' onSubmit={this.handleSubmit}>
          <input type='text'
            className='input__form-box'
            placeholder='Add a task'
            onChange={this.onChange}

            ref={function(element){
              this.textInput = element;
            }.bind(this)}

            />
          <input type='submit'
            className='input__form-submit'
            onClick={this.onAddClick}
            ref={function(element){
              this.submitButton = element;
            }.bind(this)}
            />
        </form>
      </div>
    );
  }
}

module.exports = Input;

/*
onChange={this.onAddInputChanged}

value={this.props.itemText}

ref={function(element){
  this.textInput = element;
}.bind(this)}
value={itemText}
var React = require('react');

class Input extends React.Component{
  constructor(){
    super();
  }
  render(){
    console.log(this.props, 'from input');
    return(
      <div className='input'>
        <form className='input__form' >
          <input type='text'
            className='list__input'
            placeholder='Add a task'
            value={this.state.itemText}
            onChange={this.onAddInputChanged}
             />
           <input type='submit'
             className='list__input-submit' />
        </form>
      </div>
    );
  }
}

module.exports = Input;
*/
