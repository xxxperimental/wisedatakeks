import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            tools: []
        };
    }

    async componentWillMount() {
        try {
            let r = await fetch('/api/tools');
            let tools = await r.json();
            this.setState({ tools });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <main className="container my-5">
                <h1 className="text-primary text-center">WiseDataKeks</h1>
                <ul className="list-group">
                    {this.state.tools.map(tool => {
                        return <li className="list-group-item">{tool.name}</li>
                    })}
                </ul>
            </main>
        )
    }
}

export interface IAppProps { }

export interface IAppState {
    tools: Array<{name: string}>;
}

export default App;