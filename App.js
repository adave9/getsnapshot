import React from 'react';
import './App.css';

class App extends React.Component{

    constructor(props)
    {
      super(props);
      this.state={favouritecolor:"red"};
    }

    componentDidMount(){
      setTimeout(() => 
      this.setState({favouritecolor:"yellow"}),1000
      )
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML=
        "Before Update:"+prevState.favouritecolor;
    }
    componentDidUpdate(){
      document.getElementById("div2").innerHTML=
      "After update:"+this.state.favouritecolor;
    }
  render(){
    return <div>
                <p>
                    My favourite color is {this.state.favouritecolor}.
                </p>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>;
  }
}

export default App;
