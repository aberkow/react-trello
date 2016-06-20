var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/Board');

//you can pass in props as an object either here as a var
//or in the render function before the return.
//!!!!!!!!!Important - pass these props to the Container in ReactDOM.render at the botom.
var boardConfig = {
  boardTitle: 'Board title',
  lists: [
    {
      listTitle: 'List 1 title',
      cards: ['Card 1', 'Card 2', 'Card 3']
    },
    {
      listTitle: 'List 2 title',
      cards: ['Card A', 'Card B', 'Card C']
    }
  ]
};

class Container extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      itemText: ' ',
    };
    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }
  onAddInputChanged(evt){
    console.log(this);
    this.setState({itemText: evt.target.value});
  }
  onAddClick(evt){
    evt.preventDefault();
    console.log('click');
  }
  render(){
    console.log(this.state, 'from index');
    console.log(this.props, 'from index');
    return(
      <div className='container'>
        <Board config={this.props.boardConfig}/>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Container boardConfig={boardConfig} changeHandler={this.onAddInputChanged} clickHandler={this.onAddClick} />, document.getElementById('app'));
});

// <Board boardConfig={this.props} /> itemText={this.state.itemText}

/*
this.state = {
  itemText: props.initialItemText,
  inputButtonClicked: false,
 }
this.onAddInputChanged = this.onAddInputChanged.bind(this);
// this.onAddClick = this.onAddClick.bind(this);

}
*/
/*
onAddInputChanged(evt){
this.setState({itemText: evt.target.value});
}
// onAddClick(){
//
// }
*/




//recieves two attibutes -
//look up class decoration- redux connect.
// class Container extends React.Component {
//   //initialization function.
//   constructor(props){
//     super(props);
//     this.state = {
//       boardConfig
//     };
//   }
//   render(){
//     var board = <Board boardConfig = {this.props} />
//     return (
//       <div className='container'>
//         {board}
//       </div>
//     );
//   }
// }
//
// document.addEventListener('DOMContentLoaded', function(){
//   ReactDOM.render(<Container appProps = {boardConfig}/>, document.getElementById('app'));
// });
