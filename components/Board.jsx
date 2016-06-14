// var React = require('react');
// var List = require('./List.jsx')
//
// class Board extends React.Component {
//   constructor(){
//     super();
//   }
//   render(){
//     console.log(this.props);
//     var boardTitle = this.props.boardConfig.boardTitle;
//     return (
//       //<div className = 'board'>
//         // <h1>{boardTitle}</h1>
//         // <div className = 'list__container'>
//         //   this.props.boardConfig.lists.map(function(list, index){
//         //     return (
//         //       title = {list.listTitle}
//         //       cards = {list.cards}
//         //     )
//         //   });
//         // </div>
//       //</div>
//     );
//   }
// }
//
// module.exports = Board;



// var Board = React.createClass({
//   render(){
//     var boardTitle = this.props.boardConfig.boardTitle;
//     var list = [];
//     for (var i = 0; i < 3; i++){
//       list.push(<CardList listTitle = {this.props.boardConfig.lists[i].listTitle}/>);
//     }
//     return (
//       <div className = 'board'>
//         <h2>{boardTitle}</h2>
//         {list}
//       </div>
//     );
//   }
// });
