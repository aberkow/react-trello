var React = require('react');
var ReactDOM = require('react-dom');

// var Card = React.createClass({
//   render: function(){
//     var todoItem = 'todo';
//     //var completed = false;
//     //var date = new Date();
//     return (
//       <li className='card'>
//         {todoItem}
//       </li>
//     );
//   }
// });

function Card(props) {
  var cards = [];

  return (

    <li className = 'card'>
      {props.cards}
    </li>
  );
}

module.exports = Card;
