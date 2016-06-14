var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/Board');

//you can pass in props as an object either here as a var
//or in the render function before the return.
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

//recieves two attibutes -
//look up class decoration- redux connect.
class Container extends React.Component {
  //initialization function.
  render(){
    // const boardConfig = {
    //   boardTitle: 'Board title',
    //   lists: [
    //     {
    //       listTitle: 'List 1 title',
    //       cards: ['Card 1', 'Card 2', 'Card 3']
    //     },
    //     {
    //       listTitle: 'List 2 title',
    //       cards: ['Card A', 'Card B', 'Card C']
    //     }
    //   ]
    // };

    var board = <Board boardConfig = {boardConfig}/>;
    return (
      <div className='container'>
        {board}
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Container/>, document.getElementById('app'));
});
