import React, { Component } from "react";

class CComp extends Component {
  constructor(props) {
    super(props);
        this.state= {
      Employees: [
        { id: 0, surname: "Willson", name: "Lila", days: 5, rate: 1000 , sumid:5000},
        { id: 1, surname: "Willson", name: "Luiz", days: 7, rate: 1000 , sumid:7000},
        { id: 2, surname: "Willson", name: "Luiz", days: 3, rate: 1000 , sumid:3000},
        { id: 3, surname: "Willson", name: "Luiz", days: 2, rate: 1000 , sumid:2000},
      ],
      summ: 0,
    };
    this.handleValue = this.handleValue.bind(this);
    this.handleValue1 = this.handleValue1.bind(this);


  }
  componentDidMount() {
    let summN=0;
    const copy = this.state.Employees.slice();
    copy.forEach((w) => (summN += w.sumid));
    this.setState({ summ: summN });
    console.log(summN)
    return copy;
  }

  handleValue = (id, event) => {
    const a = +event.target.value;
    let summN=0;
  
    const copy = this.state.Employees.slice();
    const result = copy.map((el, i) => {
      return i === id ? { ...el, days: a,sumid:a*el.rate } : el;});

    result.forEach((w) => (summN += w.sumid));
    this.setState({ Employees: result });
    this.setState({ summ: summN });
    return result;
  };

  handleValue1 = (id, event) => {
    let summN=0;
    const a = +event.target.value;
    const copy = this.state.Employees.slice();
    const result = copy.map((el, i) => {
      return i === id ? { ...el, rate: a,sumid:a*el.days } : el;});

      result.forEach((w) => (summN += w.sumid));
      this.setState({ summ: summN });
    this.setState({ Employees: result });
    return result;
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
              <th>Измененные дни</th>
              <th>Ставка за день</th>
              <th>Измененная ставка</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            {Employees.map((item, id) => {
              return (
                <tr key={item.id.toString()}>
                  <td>{item.surname}</td>
                  <td>{item.name}</td>
                  <td>{item.days}</td>
                  <td>
                    <textarea type="text" onChange={(e) => this.handleValue(item.id, e)}></textarea>
                  </td>
                  <td>{item.rate}</td>
                  <td>
                    <input type="text" onChange={(e) => this.handleValue1(item.id, e)}
                    ></input>
                  </td>
                  <td>{item.sumid}</td>
               
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>{this.state.summ}</p>
      </div>
    );
  }
}

export default CComp;
