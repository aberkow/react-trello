var React = require('react');

class Input extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    /*console.log(this.props, 'from Input');
    let { itemText } = this.state;*/
    
    return(
      <div className='input'>
        <form className='input__form' onSubmit={this.props.handleSubmit}>
          <input type='text'
            className='input__form-box'
            placeholder='Add a task'
            value={this.props.itemText}
            onChange={this.props.onChange}
            />
          <input type='submit'
            className='input__form-submit'
            onClick={this.props.onClick}

            />
        </form>
      </div>
    );
  }
}

module.exports = Input;

/*
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
