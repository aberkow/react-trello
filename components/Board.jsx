var React = require('react');
var CardList = require('./List.jsx')

class Board extends React.Component {
  render(){
    console.log(this.props);
    var boardTitle = this.props.boardConfig.boardTitle;
    // var list = <CardList listConfig = {this.props.boardConfig.lists}/>
    // var list = [];
    // for (var i = 0; i < 2; i++){
    //   list.push(<CardList listTitle = {this.props.boardConfig.lists[i].listTitle}/>);
    // }
    return (
      <div className = 'board'>
        <h2>{boardTitle}</h2>
        // {list}
        // {list}
        <CardList listTitle = this.props.boardConfig.lists[0] />
        <CardList listTitle = this.props.boardConfig.lists[1].listTitle />
      </div>
    );
  }
}

module.exports = Board;



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
