import React, { Component } from "react";

class CComp extends Component {
  constructor(props) {
    super(props);
    this.state = { Employees: [] };
    this.handleValue = this.handleValue.bind(this);
  }

  componentDidMount() {
    this.setState({
      Employees: [
        { id: 0, surname: "Willson", name: "Lila", days: 5, rate: 1000 },
        { id: 1, surname: "Willson", name: "Luiz", days: 7, rate: 1000 },
        { id: 2, surname: "Willson", name: "Luiz", days: 3, rate: 1000 },
        { id: 3, surname: "Willson", name: "Luiz", days: 2, rate: 1000 },
      ],
      summ: 5,
    });
  }

  handleValue = (id, event) => {
     const a = +event.target.value;
    console.log(a);
    const copy = this.state.Employees.slice();
    const result = copy.map((el, i) => {
      return i === id ? { ...el, days: a } : el;
    });

    this.setState({ Employees: result });
    console.log(this.state.Employees);
    console.log(" result");
    console.log(result);

    return result;
  };

  handleValue1 = (id, event) => {
    //  const idx=index;
    // console.log(idx);
    const a = +event.target.value;
    console.log(a);
    const copy = this.state.Employees.slice();
    const result = copy.map((el, i) => {
      return i === id ? { ...el, rate: a } : el;
    });
    this.setState({ Employees: result });
    console.log(this.state.Employees);
    console.log(" result");
    console.log(result);
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
                    <textarea
                      type="text"
                      onChange={(e) => this.handleValue(item.id, e)}
                    ></textarea>
                  </td>
                  <td>{item.rate}</td>
                  <td>
                    <input
                      type="text"
                      onChange={(e) => this.handleValue1(item.id, e)}
                    ></input>
                  </td>
                  <td>{item.rate * item.days}</td>
               
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
