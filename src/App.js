import React, { Component } from "react";

class CComp extends Component {
  constructor(props) {
    super(props);
    this.state = { Employees: [] };
    this.myRef=React.createRef();
  }

  componentDidMount() {
    this.setState({
      Employees: [
        { surname: "Willson", name: "Lila", days: 5, rate: 1000 },
        { surname: "Willson", name: "Luiz", days: 7, rate: 1000 },
        { surname: "Willson", name: "Luiz", days: 3, rate: 1000 },
        { surname: "Willson", name: "Luiz", days: 2, rate: 1000 },
      ],
    });
  }

  handleValue = () => {
    let newValue=this.myRef.current.value;
    //let value=this.state.Employees.days;
    console.log(newValue)
   // this.setState({days: newValue})
   //this.myRef.current.value='';
  };

  render() {
    const { Employees } = this.state;
    return (
      <div>
        <table border="1">
          <caption>Таблица расчета заработной платы сотрудников</caption>
          <thead>
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Количество дней</th>
              <th>Измененнные дни</th>
              <th>Ставка за день</th>
              <th>Измененная ставка</th>
              <th>Сумма</th>
              <th>Измененная Сумма</th>
            </tr>
          </thead>
          <tbody>
            {Employees.map((item, index) => {
              return (
                <tr key={index.toString()}>
                  <td>{item.surname}</td>
                  <td>{item.name}</td>
                  <td>{item.days}</td>
                  <td>
                    <textarea
                      type="text"
                      ref={this.myRef} onChange={this.handleValue}
                    >
                     
                    </textarea>
                  </td>
                  <td>{item.rate}</td>
                  <td>
                    <input type="text" value={item.rate}></input>
                  </td>
                  <td>{item.rate * item.days}</td>
                  <td>{item.rate * item.days}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      
      </div>
    );
  }
}

export default CComp;

