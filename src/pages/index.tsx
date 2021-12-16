import { Component, ReactElement, ReactNode, SyntheticEvent } from "react";
import { Button, Card, Statistic } from "semantic-ui-react";

type State = { count: number };

class App extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = { count: 0 };
  }

  reset = (e: SyntheticEvent): void => {
    e.preventDefault();
    this.setState({ count: 0 });
  };

  increment = (e: SyntheticEvent): void => {
    e.preventDefault();
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render(): ReactElement {
    const { count } = this.state;

    return (
      <div>
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic>
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div>
              <Button color="red" onClick={this.reset}>
                reset
              </Button>
              <Button color="green" onClick={this.increment}>
                +1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
