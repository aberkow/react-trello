var React = require('react');
var List = require('./List');


class Board extends React.Component {
  constructor(){
    super();
  }
  render(){
    var boardTitle = this.props.config.boardTitle;
    return (
      <div className='board'>
        <h1 className='boardTitle'>{boardTitle}</h1>
        <div className='list__container'>
          {this.props.config.lists.map(function(list, index){
          /*  console.log(list, 'from map'); */
            return <List title={list.listTitle}
              key = {index}
              cardInfo={list.cards}
              />
          })}
        </div>

      </div>
    );
  }
}

module.exports = Board;


/*
var React = require('react');
var List = require('./List');

class Board extends React.Component {
  constructor(){
    super();
  }
  render(){
    console.log(this.props, 'from board');
    var boardTitle = this.props.config.boardTitle;
    //var lists = this.props.config.lists;
    return(
      <div className='board'>
        <h1 className='boardTitle'>{boardTitle}</h1>
        <div className='list__container'>
          {this.props.config.lists.map(function(list, index){
            return <List title = {list.listTitle} key = {index} cardInfo = {list.cards}/>
          })}
        </div>
      </div>
    );
  }
}

module.exports = Board;
*/


// <List config={this.props.config.lists} />
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
