var React = require('react');

class Input extends React.Component{
  constructor(){
    super();
  }
  render(){
    console.log(this.props, 'from input');
    return(
      <div className='input'>
        <input type='text' className='list__input'/>
        <button>test</button>
      </div>
    );
  }
}

module.exports = Input;
