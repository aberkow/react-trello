// var React = require('react');
// var Card = require('./Cards.jsx');
//
// class List extends React.Component {
//   render(){
//     console.log(this.props.listConfig, 'listConfig');
//     console.log(this.props.listConfig[0].listTitle);
//     var cards = <Card cardConfig = {this.props.listConfig.cards}/>
//
//     return(
//       <div className = 'list'>
//         //<h2>{this.props.boardConfig.listTitle}</h2>
//       </div>
//     );
//   }
// }



// <div>
//   <div className = 'list'>
//     <h3>{this.props.listConfig[0].listTitle}</h3>
//     <ul className = 'list-ul'>
//       {cards}
//     </ul>
//   </div>
//   <div className = 'list'>
//     <h3>{this.props.listConfig[1].listTitle}</h3>
//     <ul className = 'list-ul'>
//       {cards}
//     </ul>
//   </div>
// </div>

// var titles = [this.props.listConfig[0].listTitle, this.props.listConfig[1].listTitle]
// console.log(this.props.listConfig[0].listTitle, 'from list');
// var listTitle = titles.map(function(title){
//   return title;
// });

//var listTitle;
// for (var i = 0; i < 2; i++){
//   listTitle = this.props.listConfig[i].listTitle;
// }



// var CardList = React.createClass({
//   render: function(){
//     //var list = [];
//     // var listTitle = [];
//     // for (var i = 0; i < 2; i++){
//     //   list.push(this.props.boardConfig.lists[i].listTitle);
//     // }
//     var listTitleArr = [this.props.boardConfig.lists[0].listTitle, this.props.boardConfig.lists[1].listTitle];
//     var listTitle = listTitleArr.map(function(title){
//       return <h3>{title}</h3>
//     });
//
//     // var listTitle;
//     // for (var i = 0; i < 2; i++){
//     //   listTitle = this.props.boardConfig.lists[i];
//     //
//     // };
//     // var cards = [];
//     // for (var i = 0; i < 3; i++){
//     //   cards.push(<Card />)
//     // }
//     return (
//       <div className = 'card-list'>
//         <h3>{listTitle}</h3>
//         <ul className = 'card-list-ul'>
//           {cards}
//         </ul>
//       </div>
//     );
//   }
// });

// function CardList(props) {
//   <div className = 'card-list'>
//     <h3>props.title</h3>
//     <ul className = 'card-list-ul'>
//       {props.cards}
//     </ul>
//   </div>
// }

module.exports = List;
