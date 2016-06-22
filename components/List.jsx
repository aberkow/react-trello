var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./Cards');
var Input = require('./InputItem');

class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      itemText: ''
    }
    // this.onAddClick = this.onAddClick.bind(this);
    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // onAddClick(evt){
  //   evt.preventDefault();
  //   //var item = evt.target.value;
  //   //var item = this.input.value;
  //   var item = ReactDOM.findDOMNode(this.refs.textInput.value);
  //
  //   this.handleSubmit(item);
  //   console.log(this.textInput, 'from List!');
  // }
  onAddInputChanged(evt){
    var item = evt.target.value;
    this.setState({itemText: item});
  }
  // handleSubmit(item){
  //   console.log('submit');
  //   console.log(this.props.cardInfo, 'from handleSubmit');
  //   this.props.cardInfo.push(item);
  //   console.log(item, 'from handleSubmit');
  //
  // }
  render(){
    /*console.log(this.props, 'from List');*/
    console.log(this.props.config, 'from list');
    return(
      <div className='list'>
        <h2 className='list__title'>{this.props.title}</h2>
        <div className='cards__container'>
          <ul className='cards__list'>
            {this.props.cardInfo.map(function(card, index){
              console.log(index, card);
              return <Card info={card} key={index} />
            })}
          </ul>
        </div>
        <Input config={this.props.cardInfo}  itemText={this.state.item}
        onChange={this.onAddInputChanged}/>

      </div>
    );
  }
}

module.exports = List;

/*
itemText={this.state.itemText}
<Input itemText={this.state.itemText}
  onClick={this.onAddClick}
  onChange={this.onAddInputChanged}
  onSubmit={this.handleSubmit}
  />
  */

  // <Input config={this.props} />
/*
var React = require('react');
var Card = require('./Cards');
//var Input = require('./InputItem');

class List extends React.Component {
  constructor(){
    super();
  }
  render(){
    console.log(this.props, 'from List');
    return(
      <div className='list'>
        <h2 className='list__title'>{this.props.title}</h2>
        <div className='cards__container'>
          <ul className='cards__list'>
            {this.props.cardInfo.map(function(card, index){
              console.log(index, card);
              return <Card info = {card} key = {index} />
            })}
          </ul>
        </div>
        /*<Input config={this.props}/>  */
/*
      </div>
    );
  }
}

module.exports = List;
*/


// <Cards cardInfo = {this.props.cardInfo} />


//         //   this.props.boardConfig.lists.map(function(list, index){
//         //     return (
//         //       title = {list.listTitle}
//         //       cards = {list.cards}
//         //     )


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
