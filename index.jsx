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
  }

  render(){
    console.log(this.props);
    return(
      <div className='container'>

      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Container boardConfig={boardConfig} />, document.getElementById('app'));
});








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
