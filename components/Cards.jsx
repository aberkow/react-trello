var React = require('react');

class Card extends React.Component{
  constructor(){
    super();
  }
  render(){
    /*console.log(this.props, 'from cards');*/
    return(
      <li className='card'>{this.props.info}</li>
    );
  }
}

module.exports = Card;

/*
var React = require('react');

class Card extends React.Component{
  constructor(){
    super();
  }
  render(){
    console.log(this.props, 'from cards');
    return(
      <li className='card'>{this.props.info}</li>
    );
  }
}

module.exports = Card;
*/

// <div className='card'>
//   <p className='card__info'>{this.props.info}</p>
// </div>

// var ReactDOM = require('react-dom');
//
// // var Card = React.createClass({
// //   render: function(){
// //     var todoItem = 'todo';
// //     //var completed = false;
// //     //var date = new Date();
// //     return (
// //       <li className='card'>
// //         {todoItem}
// //       </li>
// //     );
// //   }
// // });
//
// function Card(props) {
//     console.log(this.props.cardConfig, 'cardConfig');
//   var cards = [];
//
//   return (
//
//     <li className = 'card'>
//       {props.cards}
//     </li>
//   );
// }
//
// module.exports = Card;
